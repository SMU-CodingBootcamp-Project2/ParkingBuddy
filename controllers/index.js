const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const authRoutes = require('./api/auth');

router.use('/', authRoutes);
router.use('/', homeRoutes);

module.exports = router;