/* eslint-disable */
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
//const {Sequelize} = require('sequelize');
const db = require('./models');

const flash = require('express-flash')
const session = require('express-session')
const passport = require('passport')

app.use(flash())
app.use(
  session({ secret: "developer", resave: false, saveUninitialized: false })
);
app.use(passport.initialize())
app.use(passport.session())





const http = require('http');
const { useParams } = require("react-router-dom");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require("./routes/api-routes.js")(app);
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(()=>{
  app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
})

//console.log(db.sequelize)