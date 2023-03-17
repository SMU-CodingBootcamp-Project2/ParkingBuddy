const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Lot extends Model {
    async parkCar() {
    if (this.resident_spots === 0){
        throw new Error('No available resident spots left');
    }
    if (this.guest_spots === 0) {
        throw new Error('No available guest spots left');
    }
        // decrement available resident spots
        this.lot.resident_spots -= 1;
        // decrement available guest spots
        this.lot.guest_spots -= 1;
        // decrement total parking
        this.lot.total_parking -= 1;
        // save the updated lot
        await this.save();
    }
}

Lot.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: {
                startAt: 1,
                increment: 1,
                endAt: 100
            }
        },
        total_parking: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        resident_spots: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        guest_spots: {
            type: DataTypes.INTEGER,
            allowNull: false,
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