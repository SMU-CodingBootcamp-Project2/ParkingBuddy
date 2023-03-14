const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homepage');
});

router.get('/user', async (req, res) => {
    res.render('user');
});

router.get('/admin', async (req, res) => {
    res.render('admin');
});

module.exports = router;