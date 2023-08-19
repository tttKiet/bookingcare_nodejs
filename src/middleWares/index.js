import jwt from "jsonwebtoken";
const saltRounds = 10;

// error handler
export function handleError(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
}

// Verify token
export async function verifyToken(req, res, next) {
  try {
    const accessToken = req.headers.authorization.split(" ")[1];
    if (!accessToken) {
      return res.status(400).json({ msg: "You are not logged in." });
    }

    // Verify token here
    const tokenData = await jwt.verify(
      accessToken,
      process.env.PRIVATE_KEY_JWT
    );
    if (!tokenData) {
      return res.status(400).json({
        msg: "Token not found, expires or invalid.",
      });
    }

    req.userId = tokenData.userId;
    next();
  } catch (err) {
    return res.status(400).json({
      msg: "An error has occurred. Token not found, expires or invalid.",
    });
  }
}
