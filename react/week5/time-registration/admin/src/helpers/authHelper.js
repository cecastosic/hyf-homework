const admin = require("firebase-admin");

const decodeToken = async req => {
  var token;
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  const result = await admin.auth().verifyIdToken(token);
  return result;
};

module.exports = decodeToken;
