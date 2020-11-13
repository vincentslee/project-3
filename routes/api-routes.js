// Requiring our models and passport as we've configured it
const { sequelize } = require("../models");
const db = require("../models");
const User = require('../models/user')

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", (req, res) => {
    console.log("User is being logged in...")
    //console.log(userid)
    // Sending back a password, even a hashed password, isn't a good idea
    console.log(res.status)
    res.json({
      email: req.body.email,
      id: req.body.id
    });
  });
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    console.log("Attempting to create user...");
      User.create({
        email: String(req.body.email),
        password: String(req.body.password)
      }).then(() => {
        console.log(res.status)
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        //console.log('Signup route error')
        console.log(err)
        res.status(401).json(err);
      });
      

      
  });


  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
