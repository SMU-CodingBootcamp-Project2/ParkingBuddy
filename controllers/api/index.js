const router = require('express').Router();
const authRoutes = require('./auth');
const createRoute = require('./createAccount');
const userRoute = require('./user');
const adminRoute = require('./admin')

router.use('/login', authRoutes);
router.use('/createaccount', createRoute);
router.use('/user', userRoute);
router.use('/admin', adminRoute);
router.use('/logout', authRoutes);

module.exports = router;