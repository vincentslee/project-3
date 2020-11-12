const { Sequelize, Model, Datatypes, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}
User.init({
    email: DataTypes.STRING,
    passwrd: DataTypes.STRING
}, {sequelize, modelName: 'user'});

//module.exports = User;

/* (async () => {
    await sequelize.sync();
    const testread = await User.
}) */