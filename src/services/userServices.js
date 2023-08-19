import db from "../app/models";
import bcrypt from "bcrypt";
const saltRounds = 10;

class UserServices {
  async createUser({ email, password, fullName, phone, address, gender }) {
    // Check email exists
    const userExisted = await db.User.findOne({ where: { email } });
    if (userExisted)
      return {
        statusCode: 2,
        msg: "Email already exists.",
      };

    const passHash = await bcrypt.hash(password, saltRounds);
    if (!passHash) {
      return {
        statusCode: 3,
        msg: "Hash password failed.",
      };
    }
    const userDoc = await db.User.create({
      email,
      password: passHash,
      fullName,
      phone,
      address,
      gender,
    });

    if (userDoc) {
      return {
        statusCode: 0,
        msg: "Register user successfully.",
        user: userDoc,
      };
    } else {
      return {
        statusCode: 4,
        msg: "Register user failed.",
      };
    }
  }
  async getUserById(id) {
    // Check email exists
    const userDoc = await db.User.findByPk(id, {
      raw: true,
    });

    if (!userDoc) {
      return {
        statusCode: 1,
        msg: "User does not exist.",
      };
    }
    return {
      statusCode: 0,
      msg: "Get user successfully.",
      data: userDoc,
    };
  }
}

export default new UserServices();
