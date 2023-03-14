const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Lot extends Model {}

Lot.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        total_parking: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 100,
        },
        resident_spots: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 60,
        },
        guest_spots: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 40,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'lot',
    }
);

module.exports = Lot;