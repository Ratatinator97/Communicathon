const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;//Pour definir la facon de verifier
const mongoose = require('mongoose');
const User = mongoose.model('User');

//Utiliser l email comme un ID d'utilisateur et verifier son authentification 
passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  function(username, password, done) {
    User.findOne({ email: username }, function (err, user) {
      if (err) { return done(err); }
      // Return if user not found in database
      if (!user) {
        return done(null, false, {
          message: 'User not found'
        });
      }
      // Return if password is wrong
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'Wrong password'
        });
      }
      // If credentials are correct, return the user object
      return done(null, user);
    });
  }
));