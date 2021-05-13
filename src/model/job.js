const sequelize = require("../config/sql-connection");
const { DataTypes } = require("sequelize");

const Job = sequelize.define(
    "Job", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        salary: {
            type: DataTypes.INTEGER,
        },
        address: {
            type: DataTypes.STRING,
        },
    }, {
        freezeTableName: true,
    }
);

module.exports = Job;