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
            validate: {
                min: 1,
                max: 100
            }
        },
        is_resident: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
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