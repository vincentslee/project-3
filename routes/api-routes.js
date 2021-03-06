// Requiring our models and passport as we've configured it
const { sequelize } = require("../models");
const db = require("../models");
const User = require('../models/user')
const Data = require('../models/data')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const initializePassport = require('../client/config/passport-config');
//const { INTEGER } = require("sequelize/types");




module.exports = function(app) {
  
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate('local'), (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id
    })
    console.log("User id: "+req.user.id)
    User.findOne({
      where: {
          email: req.user.email
      }
    }).then(response=>{
      console.log("finding user...")
      if(req.user.password === response.dataValues.password){
        console.log("match")
        res.sendStatus(200)
        res.send(req.user.id)
      }else{
        res.send('Invalid email or password')
      }
      res.redirect(307, "/api/getdata")
    })
  });

  app.post('/api/getdata', (req, res)=>{
    Data.findAll({
      where: {
        userid: req.user.id
      }
    }).then(response=>{
      res.json({
        response
      })
    })
  })

  app.post('/api/submitdata', (req, res)=>{
    /* res.json({
      id: req.user.id
    }) */
    Data.create({
      userid: req.user.id,
      date: String(req.body.date),
      bloodPU: req.body.bloodPU,
      bloodPL: req.body.bloodPL
    }).then(()=>{
      console.log(res.status)
    })
    
  })


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
        console.log('Validation error')
        console.log(err)
        res.status(401).json(err);
        //res.send(401)
      });
      

      
  });


  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  /* app.get("/api/user_data", (req, res) => {
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
  }); */
};
