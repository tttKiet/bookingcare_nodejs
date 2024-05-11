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
      return next();
      // return res.status(400).json({ msg: "You are not logged in." });
    }

    // Verify token here
    const tokenData = jwt.verify(accessToken, process.env.PRIVATE_KEY_JWT);

    if (!tokenData) {
      return next();
    }
    req.user = {
      id: tokenData.userId,
      role: {
        ...tokenData.role,
      },
    };
    next();
  } catch (err) {
    next();
  }
}

// Forwards Login or not login
export async function requireLogin(req, res, next) {
  if (req?.user) {
    next();
  } else {
    return res.status(400).json({ msg: "Bạn chưa đăng nhập." });
  }
}

// Verify token admin
export async function verifyTokenAdmin(req, res, next) {
  verifyToken(req, res, () => {
    if (req?.user?.role?.id && req.user.role?.keyType === "admin") {
      next();
    } else if (!req?.user?.role?.id) {
      return res.status(401).json({ statusCode: 1, msg: "You are not login." });
    } else {
      return res.status(403).json({ statusCode: 4, msg: "You are not admin." });
    }
  });
}

// Verify token admin
export async function verifyTokenManager(req, res, next) {
  verifyToken(req, res, () => {
    if (
      req?.user?.role?.id &&
      ["admin", "hospital_manager", "doctor"].includes(req.user.role?.keyType)
    ) {
      next();
    } else if (!req?.user?.role?.id) {
      return res
        .status(401)
        .json({ statusCode: 1, msg: "Bạn chưa đăng nhập." });
    } else {
      return res
        .status(403)
        .json({ statusCode: 4, msg: "You are not admin or doctor." });
    }
  });
}

// Upload Aws S3
export * from "./uploadAwsS3";
