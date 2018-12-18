var passport = require('passport');
var passportJwt = require('passport-jwt');
var userModel = require('../models/user.js');

var jwtOptions = {
  // Get the JWT from the "Authorization" header.
  // By default this looks for a "JWT " prefix
  jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
  // The secret that was used to sign the JWT
  secretOrKey: 'bananarama'
};

passport.use(new passportJwt.Strategy(jwtOptions, (jwtPayload, cb) => {
  console.log(jwtPayload);
  return userModel.findOne({googleUser_id: jwtPayload.sub})
    .then(user => {
      return cb(null, user);
    })
    .catch(err => {
      return cb(err);
    });
}));

  // var user = users.getUserById(parseInt(payload.sub));
  // if (user) {
  //   return done(null, user, payload);
  // }
  // return done();

