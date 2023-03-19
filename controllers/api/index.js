const router = require('express').Router();
const authRoutes = require('./auth');
const createRoute = require('./createAccount');
const userRoute = require('./user');
const adminRoute = require('./admin')

router.use('/login', authRoutes);
router.use('/api', createRoute);
router.use('/api', userRoute);
router.use('/api', adminRoute);
router.use('/logout', authRoutes);

module.exports = router;