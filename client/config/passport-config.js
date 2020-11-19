const passport = require('passport')
const { authenticate } = require('passport')

const LocalStrategy = require('passport-local').Strategy
const db = require("../../models/index");
const User = require("../../models/user");

passport.use(
    new LocalStrategy(
        {
            usernameField: 'email'
        },
        (email, password, done)=>{
            User.findOne({
                where: {
                    email: email
                }
            }).then(dbUser=>{
                if(!dbUser){
                    return done(null, false, {
                        message: 'Incorrect email'
                    });
                }
                else if (!dbUser.validPassword(password)){
                    return done(null, false, {
                        message: 'Incorrect password'
                    });
                }
                return done(null, dbUser)
            })
        }
    )
)

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser((user, cb) => {
    cb(null, user);
  });
  
  passport.deserializeUser((obj, cb) => {
    cb(null, obj);
  });
  
  // Exporting our configured passport
  module.exports = passport;