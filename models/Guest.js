const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Guest extends Model { }

Guest.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
        },
        license_plate: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            unique: true,
        },
        car_make: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
        },
        car_model: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
        },
        car_color: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
        },
        resident_first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
        },
        resident_last_name:  {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
        },
    },
    {sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'guest',
    }
);

module.exports = Guest;