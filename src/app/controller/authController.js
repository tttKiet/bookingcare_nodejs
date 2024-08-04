import { authServices, userServices } from "../../services";

class AuthController {
  // [POST] /api/v1/auth/login
  async handleLogin(req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "Missing input parameters." });
    }

    try {
      const data = await authServices.login({
        email: email,
        password: password,
      });

      return res
        .cookie("token", data.token, {
          httpOnly: true,
          sameSite: "none",
          secure: true,
          expiresIn: data.expiresIn,
        })
        .status(200)
        .json({ statusCode: data.statusCode, msg: data.msg, user: data.user });
    } catch (err) {
      return res.status(500).json({ msg: "Error login.", err: err.message });
    }
  }

  // [GET] /api/v1/auth/fetch-profile
  async handleFetchProfile(req, res, next) {
    const userId = req?.user?.id || null;
    if (!userId) {
      return res
        .status(400)
        .json({ msg: "Missing input parameters. [userId]" });
    }

    try {
      const data = await userServices.getUserById(userId);
      if (data.statusCode != 0) {
        return res.status(400).json(data);
      }
      return res.status(200).json(data);
    } catch (err) {
      return res.status(500).json({ msg: "Error login.", err: err.message });
    }
  }

  // [GET] /api/v1/auth/logout
  async handleLogout(req, res, next) {
    try {
      res.cookie("token", "", {
        sameSite: "none",
        secure: true,
      });
      return res
        .status(200)
        .json({ statusCode: 0, msg: "Logout successfully" });
    } catch (err) {
      return res.status(500).json({ msg: "Error logout.", err: err.message });
    }
  }
}

export default new AuthController();
