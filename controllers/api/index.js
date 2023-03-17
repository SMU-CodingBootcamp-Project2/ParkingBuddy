const router = require('express').Router();
const authRoutes = require('./auth');
const createRoute = require('./createAccount');
const userRoute = require('./user');

router.use('/login', authRoutes);
router.use('/createaccount', createRoute);
router.use('/user', userRoute);

module.exports = router;