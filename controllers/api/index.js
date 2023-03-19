const router = require('express').Router();
const userRoutes = require('./userRoutes');
const residentRoute = require('./resident');
const adminRoute = require('./admin')

router.use('/users', userRoutes);
router.use('/resident', residentRoute);
router.use('/admin', adminRoute);


module.exports = router;