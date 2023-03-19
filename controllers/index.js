const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/api', homeRoutes);

module.exports = router;