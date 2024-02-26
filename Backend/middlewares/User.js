const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

function userMiddleware(req, res, next) {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      // Extract token from Authorization header
      token = req.headers.authorization.split(" ")[1];
    } else if (req.body && req.body.token) {
      // Extract token from request body
      token = req.body.token;
    } else {
      // No token provided
      return res.status(401).json({ msg: "No token provided" });
    }

    const decodedValue = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded value", decodedValue);
    req.user = decodedValue;
    next();
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      // JWT verification failed (e.g., invalid signature, invalid token format)
      return res.status(401).json({ msg: "Invalid token" });
    } else if (err.name === "TokenExpiredError") {
      // JWT expired
      return res.status(401).json({ msg: "Token expired" });
    } else {
      // Other errors
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  }
}

module.exports = {
  userMiddleware,
};
