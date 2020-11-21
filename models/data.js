const { sequelize, DataTypes } = require('./index');

const Data = sequelize.define("Data",{
    userid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    bloodPU: {
        type: DataTypes.STRING
    },
    bloodPL: {
        type: DataTypes.STRING
    },
    weight: {
        type: DataTypes.FLOAT
    }}, {timestamps: false}
);

module.exports = Data