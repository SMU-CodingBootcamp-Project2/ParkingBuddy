const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Resident extends Model {}

Resident.init(
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
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    license_plate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    car_make: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    car_model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    car_color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apartment_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    lot_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
         model: 'lot',
         key: 'id',
        },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'resident',
  }
);

module.exports = Resident;