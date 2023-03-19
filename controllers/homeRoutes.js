const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('homepage');
});

router.get('/login', async (req, res) => {
   
    res.render('login');
});

router.get('/user', withAuth, async (req, res) => {
    res.render('user');
});

router.get('/admin', withAuth, async (req, res) => {
    res.render('admin');
});

router.get('/createaccount', async (req, res) => {
    res.render('createaccount');
});

router.get('/test', async (req, res) => {
    res.render('stylingtest');
});
module.exports = router;