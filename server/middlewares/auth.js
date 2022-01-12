const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  //take token from header

  const token = req.headers.token;
  console.log(token);
  if (!token) {
    return res.status(400).json("no-token");
  }

  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) return res.status(403).json("invalid token");

    req.user = user;
    next();
  });
};

const verifyTokenAndAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.idUser == req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("not allowed");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("not allowed");
    }
  });
};

module.exports = { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuth };
