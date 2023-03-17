const Resident = require('./Resident');
const Lot = require('./Lot');
const User = require('./User')

Lot.belongsTo(Resident, {
    foreignKey: 'resident_id',
});
Resident.hasMany(Lot, {
    foreignKey: 'resident_id',
});
User.hasOne(Resident, {
    foreignKey: 'user_id',
});
Resident.belongsTo(User, {
    foreignKey: 'user_id',
});


module.exports = { Resident, Lot, User}