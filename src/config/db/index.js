const { Sequelize } = require("sequelize");
import { PostgresDialect } from "@sequelize/postgres";

// Thông tin kết nối được lấy từ biến môi trường hoặc sử dụng giá trị mặc định
const databaseUrl = process.env.POSTGRES_URL || "BookingCare";
const database = process.env.POSTGRES_DATABASE || "BookingCare";
const username = process.env.POSTGRES_USER || "postgres";
const password = process.env.POSTGRES_PASSWORD || "buikiet01";
const host = process.env.POSTGRES_HOST || "localhost";

// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize(database, username, password, {
//   host: host,
//   dialect: "postgres",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// });

const sequelize = new Sequelize(databaseUrl);

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection postgres has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connect;
