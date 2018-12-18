const jwt = require('jsonwebtoken');

// Generate an Access Token for the given User ID
function generateAccessToken(id) {
  // How long will the token be valid for
  const expiresIn = '1 hour';
  // The signing key for signing the token
  const secret = 'bananarama';

  const token = jwt.sign({}, secret, {
    expiresIn: expiresIn,
    subject: id
  });

  return token;
}

// var generateUserToken = function(req) {
//   console.log(req.user);
//   const accessToken = generateAccessToken(req.user.id);
// }

module.exports = generateAccessToken;