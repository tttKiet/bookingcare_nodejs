import moment from "moment";
import { sortObject } from "../../untils";
import userController from "./userController";
import { userServices } from "../../services";

class PaymentController {
  //[POST] /payment/vnpay/create_payment_url
  async handleCreatePaymentVnpayUrl(req, res) {
    const dataBooking = req.dataBooking;

    console.log("dataBooking", dataBooking);
    if (!(dataBooking && dataBooking.statusCode === 0)) {
      return res.status(500).json({
        statusCode: 500,
        msg: `Đã có lỗi xảy ra vui lòng thử lại.`,
      });
    }

    const { data } = dataBooking;

    let date = new Date();
    let createDate = moment(date).format("yyyyMMDDHHmmss");

    let ipAddr =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress;

    let config = require("config");

    let tmnCode = config.get("vnp_TmnCode");
    let secretKey = config.get("vnp_HashSecret");
    let vnpUrl = config.get("vnp_Url");
    let returnUrl = config.get("vnp_ReturnUrl");
    let orderId = moment(date).format("DDHHmmss");
    // let amount = req.body.amount || 100000;
    // let bankCode = "NCB";

    let locale = "vn";
    let currCode = "VND";
    let vnp_Params = {};
    vnp_Params["vnp_Version"] = "2.1.0";
    vnp_Params["vnp_Command"] = "pay";
    vnp_Params["vnp_TmnCode"] = tmnCode;
    vnp_Params["vnp_Locale"] = locale;
    vnp_Params["vnp_CurrCode"] = currCode;
    vnp_Params["vnp_TxnRef"] = data.id;
    vnp_Params["vnp_OrderInfo"] = "Thanh toan cho ma GD:" + data.id;
    vnp_Params["vnp_OrderType"] = "Thanh toan VNPAY";
    vnp_Params["vnp_Amount"] = data.doctorPrice * 100;
    vnp_Params["vnp_ReturnUrl"] = returnUrl;
    vnp_Params["vnp_IpAddr"] = ipAddr;
    vnp_Params["vnp_CreateDate"] = createDate;
    // vnp_Params["vnp_BankCode"] = bankCode;
    // if (bankCode !== null && bankCode !== "") {
    // }

    vnp_Params = sortObject(vnp_Params);

    let querystring = require("qs");
    let signData = querystring.stringify(vnp_Params, { encode: false });
    let crypto = require("crypto");
    let hmac = crypto.createHmac("sha512", secretKey);
    let signed = hmac.update(new Buffer(signData, "utf-8")).digest("hex");
    vnp_Params["vnp_SecureHash"] = signed;
    vnpUrl += "?" + querystring.stringify(vnp_Params, { encode: false });

    return res.status(200).json({
      statusCode: 200,
      msg: "Đã tạo thanh toán",
      data: {
        url: vnpUrl,
      },
    });
  }
  async vnpay_return(req, res) {
    let config = require("config");
    let querystring = require("qs");
    let crypto = require("crypto");

    var vnp_Params = req.query;
    var secureHash = vnp_Params["vnp_SecureHash"];

    delete vnp_Params["vnp_SecureHash"];
    delete vnp_Params["vnp_SecureHashType"];

    vnp_Params = sortObject(vnp_Params);

    var secretKey = config.get("vnp_HashSecret");

    var signData = querystring.stringify(vnp_Params, { encode: false });
    var hmac = crypto.createHmac("sha512", secretKey);
    var signed = hmac.update(new Buffer(signData, "utf-8")).digest("hex");
    console.log("signed", signed);
    if (secureHash === signed) {
      var orderId = vnp_Params["vnp_TxnRef"];
      var rspCode = vnp_Params["vnp_ResponseCode"];

      const updateBooking = await userServices.updateStatusBooking({
        status: "CU2",
        bookingId: orderId,
      });

      if (updateBooking.statusCode == 0) {
        return res.status(200).json({
          statusCode: 200,
          msg: "Đơn hàng đã được thanh toán thành công.",
          data: updateBooking.data,
        });
      } else {
        return res.status(updateBooking.statusCode).json({
          statusCode: updateBooking.statusCode,
          msg: "Đơn hàng đã bị xóa hoặc không tìm thấy.",
        });
      }
      //Kiem tra du lieu co hop le khong, cap nhat trang thai don hang va gui ket qua cho VNPAY theo dinh dang duoi

      // res.render("success", { code: vnp_Params["vnp_ResponseCode"] });
    } else {
      return res.status(500).json({
        statusCode: 500,
        msg: "Đã có lỗi xãy ra. Dữ liệu đã bị thay đổi.",
      });
    }
  }

  // async vnpay_return(req, res, next) {
  //   var vnp_Params = req.query;

  //   var secureHash = vnp_Params["vnp_SecureHash"];

  //   delete vnp_Params["vnp_SecureHash"];
  //   delete vnp_Params["vnp_SecureHashType"];

  //   vnp_Params = sortObject(vnp_Params);

  //   var tmnCode = config.get("vnp_TmnCode");
  //   var secretKey = config.get("vnp_HashSecret");

  //   var signData = querystring.stringify(vnp_Params, { encode: false });
  //   var hmac = crypto.createHmac("sha512", secretKey);
  //   var signed = hmac.update(new Buffer(signData, "utf-8")).digest("hex");

  //   if (secureHash === signed) {
  //     //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua

  //     res.render("success", { code: vnp_Params["vnp_ResponseCode"] });
  //   } else {
  //     res.render("success", { code: "97" });
  //   }
  // }
  // sds() {
  //   const element = document.evaluate(
  //     '//div[@class="relative select-none w-full py-[0.6rem] text-center text-black cursor-pointer font-bold"]/div[@class="relative z-10 h-full w-full"]',
  //     document,
  //     null,
  //     XPathResult.FIRST_ORDERED_NODE_TYPE,
  //     null
  //   ).singleNodeValue;
  //   if (element) {
  //     const divText = element.textContent.trim();

  //     const match = divText.match(/\((\d+)\)/);

  //     const number = parseInt(match[1], 10);
  //     return number;
  //   }
  // }
}

export default new PaymentController();
