const jwt = require("jsonwebtoken");

exports.jwToken = (user, expired) => {
  return jwt.sign(user, process.env.SECRET_TOKEN, {
    expiresIn: expired,
  });
};
