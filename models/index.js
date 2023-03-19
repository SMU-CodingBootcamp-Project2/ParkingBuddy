const Resident = require('./Resident');
const Lot = require('./Lot');
const User = require('./User');
const Guest = require('./Guest');

Resident.belongsTo(Lot, {
    foreignKey: 'lot_id',
});
Lot.hasMany(Resident, {
    foreignKey: 'lot_id',
});
User.hasOne(Resident, {
    foreignKey: 'user_id',
});
Resident.belongsTo(User, {
    foreignKey: 'user_id',
});

Guest.belongsTo(Resident, {
    foreignKey: 'resident_id',
});

Resident.hasMany(Guest, {
    foreignKey: 'resident_id',
});


module.exports = { Resident, Lot, User, Guest }