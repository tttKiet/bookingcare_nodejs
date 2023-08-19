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
}

export default new UserServices();
