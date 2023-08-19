import { userServices } from "../../services";

class UserController {
  // [POST] /api/v1/user/register
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
}

export default new UserController();
