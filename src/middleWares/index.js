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
    const accessToken = req.cookies.token;
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

    req.user = {
      id: tokenData.userId,
    };
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      msg: "An error has occurred. Token not found, expires or invalid.",
    });
  }
}

// Verify token admin
export async function verifyTokenAdmin(req, res, next) {
  verifyToken(req, res, () => {
    if (req.user.role !== 0) {
      res.status(403).json({ statusCode: 5, msg: "You are not admin." });
    }
    next();
  });
}

// Upload Aws S3
export * from "./uploadAwsS3";
