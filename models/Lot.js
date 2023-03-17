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
        available_spots: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 100,
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
            allowNull: true,
            defaultValue: "",
        },
        apartment_number: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
        },
        is_resident: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        resident_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            references: {
                model: 'resident',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'lot',
    }
);

module.exports = Lot;