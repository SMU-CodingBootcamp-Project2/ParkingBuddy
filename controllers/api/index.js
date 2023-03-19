const router = require('express').Router();
const userRoutes = require('./userRoutes');
const createRoute = require('./createAccount');
const residentRoute = require('./resident');
const adminRoute = require('./admin')

router.use('/users', userRoutes);
router.use('/createaccount', createRoute);
router.use('/resident', residentRoute);
router.use('/admin', adminRoute);


module.exports = router;