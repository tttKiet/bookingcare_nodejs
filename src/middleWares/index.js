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
    const tokenData = jwt.verify(accessToken, process.env.PRIVATE_KEY_JWT);

    if (!tokenData) {
      return res.status(400).json({
        msg: "Token not found, expires or invalid.",
      });
    }

    console.log(" token", tokenData);

    req.user = {
      id: tokenData.userId,
      role: tokenData.role,
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
    if (req?.user?.role?.id && req.user.role?.keyType === "admin") {
      next();
    } else {
      return res.status(403).json({ statusCode: 4, msg: "You are not admin." });
    }
  });
}

// Upload Aws S3
export * from "./uploadAwsS3";
