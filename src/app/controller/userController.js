import { userServices } from "../../services";

class UserController {
  // [POST] /api/v1/user
  async handleRegister(req, res, next) {
    const { email, password, fullName, phone, address, gender } = req.body;
    if (!email || !password || !fullName || !phone || !address || !gender) {
      return res.status(401).json({
        statusCode: 1,
        msg: "Missing input parameters.",
      });
    }

    try {
      const data = await userServices.createUser({
        email,
        password,
        fullName,
        phone,
        address,
        gender,
      });

      if (data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      return res
        .status(500)
        .json({ msg: "Error creating user.", err: err.message });
    }
  }

  // [GET] /api/v1/user
  async handleGetUser(req, res, next) {
    const { limit, offset } = req.query;
    try {
      const data = await userServices.getUser({
        limit,
        offset,
      });
      if (data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }

  // [POST] /api/v1/user
  async handleCreateOrUpdateUser(req, res, next) {
    const { id, email, password, fullName, phone, address, gender } = req.body;
    if (
      !id &&
      (!email || !password || !fullName || !phone || !address || !gender)
    ) {
      return res.status(401).json({
        statusCode: 1,
        msg: "Thiếu tham số truyền vào.",
      });
    }
    try {
      const data = await userServices.createOrUpdateUser({
        id,
        email,
        password,
        fullName,
        phone,
        address,
        gender,
        role: req.user?.role.keyType,
      });
      if (data.statusCode === 0) {
        return res.status(200).json(data);
      }
      return res.status(400).json(data);
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    }
  }
}

export default new UserController();
