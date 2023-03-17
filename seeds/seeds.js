const sequelize = require('../config/connection');
const Lot = require('../models/Lot');
const Resident = require('../models/Resident');
const User = require('../models/User');
const userData = require('./userData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: false });

        // Seeds the Lot table
        await Lot.bulkCreate(userData.lots, {
            individualHooks: true,
            returning: true,
        });

    // Seeds the Residents table
        await Resident.bulkCreate(userData.residents, {
            individualHooks: true,
            returning: true,
        });

        // Seeds the User table
        await User.bulkCreate(userData.users, {
            individualHooks: true,
            returning: true,
        });

        process.exit(0);
};

seedDatabase();