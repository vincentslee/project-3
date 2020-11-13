/* eslint-disable */
const express = require("express");
const session = require('express-session');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const {Sequelize} = require('sequelize');
const db = require('./models');

const http = require('http');

const mysql = require('mysql');

//Code for mysql db connection, might not be used
/* const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'project-3'
});

db.connect(function(err){
  console.log("Database connected")
  if (err){
    console.log('DB error');
    throw err;
  }
}); */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);

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