const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("BookingCare", "postgres", "buikiet01", {
  host: "localhost",
  dialect: "postgres",
});

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection postgres has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connect;
