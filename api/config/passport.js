const passport = require('passport');
// const { Strategy: LocalStrategy } = require('passport-local');
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

const db = require('./db.config')

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.User.findByPk(id, (err, user) => {
    done(err, user);
  });
});

passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  db.User.findOne({ where: { email: email.toLowerCase() }}).then(user => {
    if (!user) {
      return done(null, false, { msg: `Email ${email} not found.` });
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) { return done(err); }
      if (isMatch) {
        return done(null, user);
      }
      return done(null, false, { msg: 'Invalid email or password.' });
    });
  });
}));