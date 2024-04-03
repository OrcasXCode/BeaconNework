const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const { User } = require("./db/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      User.findOneAndUpdate(
        { email: profile._json.email },
        {
          name: profile._json.name,
          email: profile._json.email,
          password: profile._json.sub,
        },
        { new: true, upsert: true }
      )
        .then((user) => {
          done(null, { id: user.id, email: user.email });
        })
        .catch((err) => {
          done(err);
        });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err);
    });
});

module.exports = passport;
