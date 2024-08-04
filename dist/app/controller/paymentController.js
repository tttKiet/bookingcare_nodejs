"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _untils = require("../../untils");
var _userController = _interopRequireDefault(require("./userController"));
var _services = require("../../services");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PaymentController = /*#__PURE__*/function () {
  function PaymentController() {
    _classCallCheck(this, PaymentController);
  }
  _createClass(PaymentController, [{
    key: "handleCreatePaymentVnpayUrl",
    value: //[POST] /payment/vnpay/create_payment_url
    function () {
      var _handleCreatePaymentVnpayUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
        var dataBooking, data, date, createDate, ipAddr, config, tmnCode, secretKey, vnpUrl, returnUrl, orderId, locale, currCode, vnp_Params, querystring, signData, crypto, hmac, signed;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              dataBooking = req.dataBooking;
              if (dataBooking && dataBooking.statusCode === 0) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return", res.status(500).json({
                statusCode: dataBooking.statusCode,
                msg: dataBooking.msg
              }));
            case 3:
              data = dataBooking.data;
              date = new Date();
              createDate = (0, _moment["default"])(date).format("yyyyMMDDHHmmss");
              ipAddr = req.headers["x-forwarded-for"] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
              config = require("config");
              tmnCode = config.get("vnp_TmnCode");
              secretKey = config.get("vnp_HashSecret");
              vnpUrl = config.get("vnp_Url");
              returnUrl = config.get("vnp_ReturnUrl");
              orderId = (0, _moment["default"])(date).format("DDHHmmss"); // let amount = req.body.amount || 100000;
              // let bankCode = "NCB";
              locale = "vn";
              currCode = "VND";
              vnp_Params = {};
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

              vnp_Params = (0, _untils.sortObject)(vnp_Params);
              querystring = require("qs");
              signData = querystring.stringify(vnp_Params, {
                encode: false
              });
              crypto = require("crypto");
              hmac = crypto.createHmac("sha512", secretKey);
              signed = hmac.update(new Buffer(signData, "utf-8")).digest("hex");
              vnp_Params["vnp_SecureHash"] = signed;
              vnpUrl += "?" + querystring.stringify(vnp_Params, {
                encode: false
              });
              return _context.abrupt("return", res.status(200).json({
                statusCode: 200,
                msg: "Đã tạo thanh toán",
                data: {
                  url: vnpUrl
                }
              }));
            case 37:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function handleCreatePaymentVnpayUrl(_x, _x2) {
        return _handleCreatePaymentVnpayUrl.apply(this, arguments);
      }
      return handleCreatePaymentVnpayUrl;
    }()
  }, {
    key: "vnpay_return",
    value: function () {
      var _vnpay_return = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
        var config, querystring, crypto, vnp_Params, secureHash, secretKey, signData, hmac, signed, orderId, rspCode, updateBooking, _updateBooking, _updateBooking2;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              config = require("config");
              querystring = require("qs");
              crypto = require("crypto");
              vnp_Params = req.query;
              secureHash = vnp_Params["vnp_SecureHash"];
              delete vnp_Params["vnp_SecureHash"];
              delete vnp_Params["vnp_SecureHashType"];
              vnp_Params = (0, _untils.sortObject)(vnp_Params);
              secretKey = config.get("vnp_HashSecret");
              signData = querystring.stringify(vnp_Params, {
                encode: false
              });
              hmac = crypto.createHmac("sha512", secretKey);
              signed = hmac.update(new Buffer(signData, "utf-8")).digest("hex");
              console.log('\n\nvnp_Params["vnp_ResponseCode"]vnp_Params["vnp_ResponseCode"]', vnp_Params["vnp_ResponseCode"]);
              orderId = vnp_Params["vnp_TxnRef"];
              rspCode = vnp_Params["vnp_ResponseCode"];
              if (!(rspCode !== "00")) {
                _context2.next = 24;
                break;
              }
              _context2.next = 18;
              return _services.userServices.updateStatusBooking({
                status: "CU4",
                bookingId: orderId,
                sendEmail: false
              });
            case 18:
              updateBooking = _context2.sent;
              if (!(updateBooking.statusCode == 0)) {
                _context2.next = 23;
                break;
              }
              return _context2.abrupt("return", res.status(200).json({
                statusCode: 406,
                msg: "Lịch hẹn đã bị hủy.",
                data: updateBooking.data
              }));
            case 23:
              return _context2.abrupt("return", res.status(updateBooking.statusCode).json({
                statusCode: updateBooking.statusCode,
                msg: "Đơn hàng đã bị xóa hoặc không tìm thấy."
              }));
            case 24:
              if (!(secureHash === signed)) {
                _context2.next = 46;
                break;
              }
              if (!(rspCode == "00")) {
                _context2.next = 36;
                break;
              }
              _context2.next = 28;
              return _services.userServices.updateStatusBooking({
                status: "CU2",
                bookingId: orderId,
                sendEmail: true
              });
            case 28:
              _updateBooking = _context2.sent;
              if (!(_updateBooking.statusCode == 0)) {
                _context2.next = 33;
                break;
              }
              return _context2.abrupt("return", res.status(200).json({
                statusCode: 200,
                msg: "Đơn hàng đã được thanh toán thành công.",
                data: _updateBooking.data
              }));
            case 33:
              return _context2.abrupt("return", res.status(_updateBooking.statusCode).json({
                statusCode: _updateBooking.statusCode,
                msg: "Đơn hàng đã bị xóa hoặc không tìm thấy."
              }));
            case 34:
              _context2.next = 44;
              break;
            case 36:
              _context2.next = 38;
              return _services.userServices.updateStatusBooking({
                status: "CU4",
                bookingId: orderId,
                sendEmail: false
              });
            case 38:
              _updateBooking2 = _context2.sent;
              if (!(_updateBooking2.statusCode == 0)) {
                _context2.next = 43;
                break;
              }
              return _context2.abrupt("return", res.status(200).json({
                statusCode: 200,
                msg: "Đơn hàng đã được thanh toán thành công.",
                data: _updateBooking2.data
              }));
            case 43:
              return _context2.abrupt("return", res.status(_updateBooking2.statusCode).json({
                statusCode: _updateBooking2.statusCode,
                msg: "Đơn hàng đã bị xóa hoặc không tìm thấy."
              }));
            case 44:
              _context2.next = 47;
              break;
            case 46:
              return _context2.abrupt("return", res.status(500).json({
                statusCode: 500,
                msg: "Đã có lỗi xãy ra. Dữ liệu đã bị thay đổi."
              }));
            case 47:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function vnpay_return(_x3, _x4) {
        return _vnpay_return.apply(this, arguments);
      }
      return vnpay_return;
    }()
  }, {
    key: "vnpay_ipn",
    value: function () {
      var _vnpay_ipn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
        var vnp_Params, secureHash, config, secretKey, querystring, signData, crypto, hmac, signed, orderId, rspCode;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              console.log("---------------------------------------------------------------------------------");
              vnp_Params = req.query;
              secureHash = vnp_Params["vnp_SecureHash"];
              delete vnp_Params["vnp_SecureHash"];
              delete vnp_Params["vnp_SecureHashType"];
              vnp_Params = (0, _untils.sortObject)(vnp_Params);
              config = require("config");
              secretKey = config.get("vnp_HashSecret");
              querystring = require("qs");
              signData = querystring.stringify(vnp_Params, {
                encode: false
              });
              crypto = require("crypto");
              hmac = crypto.createHmac("sha512", secretKey);
              signed = hmac.update(new Buffer(signData, "utf-8")).digest("hex");
              if (secureHash === signed) {
                orderId = vnp_Params["vnp_TxnRef"];
                rspCode = vnp_Params["vnp_ResponseCode"]; //Kiem tra du lieu co hop le khong, cap nhat trang thai don hang va gui ket qua cho VNPAY theo dinh dang duoi
                res.status(200).json({
                  RspCode: "00",
                  Message: "success"
                });
              } else {
                res.status(200).json({
                  RspCode: "97",
                  Message: "Fail checksum"
                });
              }
            case 14:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function vnpay_ipn(_x5, _x6) {
        return _vnpay_ipn.apply(this, arguments);
      }
      return vnpay_ipn;
    }()
  }]);
  return PaymentController;
}();
var _default = new PaymentController();
exports["default"] = _default;