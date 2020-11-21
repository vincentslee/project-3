const {Sequelize, DataTypes} = require('sequelize');
const db        = {};

/* let sequelize = new Sequelize('project-3', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }); */
  let sequelize = new Sequelize(process.env.JAWSDB_URL, {
    dialect: 'mysql'
  });

sequelize.authenticate()
.then(() => {
console.log('Databse connection has been established successfully.');
})
.catch(err => {
console.error('Unable to connect to the database:', err);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.DataTypes = DataTypes;

module.exports = db;
