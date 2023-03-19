const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');

router.use('/', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;