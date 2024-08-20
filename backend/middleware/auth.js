const jwt = require("jsonwebtoken");

const isAdmin = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized User" });
  }

  jwt.verify(
    token.replace("Bearer ", ""),
    process.env.JWT_SECRET,
    (err, decoded) => {
      if (err) {
        console.error("Token Verification failed:", err.message);
        return res
          .status(401)
          .json({ success: false, message: "Unauthorized User" });
      } else {
        if (decoded.role === "admin") {
          next();
        } else {
          console.error("User is not admin");
          return res.status(403).json({ success: false, message: "Forbidden" });
        }
      }
    }
  );
};

module.exports = isAdmin;
