const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const crypto = require('crypto');
const { User } = require('../../models');

passport.use(new LocalStrategy.Strategy({}, async (username, password, done) => {
    try {
        const user = await User.findOne({
            where: {
                username: username
            }
        })
        console.log(user);
    } catch (error) {
        done(error);
    }
}));


router.get('/login', async (req, res) => {
    res.render('login');
});

router.post('/login/password', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));


module.exports = router;