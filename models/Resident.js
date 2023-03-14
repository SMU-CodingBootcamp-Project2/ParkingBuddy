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
        defaultValue: '',
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
    },
    license_plate: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
    },
    car_make: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
    },
    car_model: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
    },
    apartment_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 500,
    },
    spot_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
         defaultValue: 1,
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