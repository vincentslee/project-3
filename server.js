/* eslint-disable */
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var {Sequelize} = require('sequelize'), sequelize=null
const db = require('./models');

const flash = require('express-flash')
const session = require('express-session')
const passport = require('passport')
const http = require('http')
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

if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the postgres database
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres'
  })
}

/* db.sequelize.sync().then(()=>{
  app.listen(process.env.PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
}) */
db.sequelize.sync().then(function() {
  http.createServer(app).listen(PORT, function(){
    console.log('Express server listening on port ${PORT}!' );
  });
});

//console.log(db.sequelize)