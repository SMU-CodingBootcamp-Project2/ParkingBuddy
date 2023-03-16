const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const { User } = require('../../models');

passport.use(new LocalStrategy.Strategy({usernameField: 'email'}, async (username, password, done) => {
    try {
        const user = await User.findOne({
            where: {
                email: username
            }
        })
        console.log(user);
        return done(null, user);
    } catch (error) {
        return done(error);
    }
}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
})

router.get('/', async (req, res) => {
    res.render('login');
});

router.post('/', passport.authenticate('local', {
    // successRedirect: '/user',
    failureRedirect: '/login'
}), (req, res) => {
    res.redirect('/user');
});


module.exports = router;