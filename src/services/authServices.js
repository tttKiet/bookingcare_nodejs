import db from "../app/models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class authServices {
  async login({ email, password }) {
    // Check user exists
    const emailExists = await db.User.findOne({
      raw: true,
      where: {
        email,
      },
    });

    if (!emailExists) {
      return {
        statusCode: 1,
        msg: "Email not found.",
      };
    }

    // Check password
    const isValidPass = await bcrypt.compare(password, emailExists.password);

    if (!isValidPass) {
      return {
        statusCode: 2,
        msg: "Password invalid.",
      };
    }

    // Create JWT token
    const dataSign = {
      email: emailExists.email,
      userId: emailExists.id,
    };
    const token = await jwt.sign(dataSign, process.env.PRIVATE_KEY_JWT, {
      expiresIn: "1d",
    });
    const expiresIn = Math.floor(new Date().getTime() / 1000);
    return {
      statusCode: 0,
      msg: "Login successfully.",
      token: token,
      expiresIn,
    };
  }
}

export default new authServices();
