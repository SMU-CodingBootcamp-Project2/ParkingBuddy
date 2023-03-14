const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const crypto = require('crypto');
const { User } = require('../../models');

passport.use(new LocalStrategy(async function (username, password, done) {
    let user;

    try {
        user = await User.findOne({
            where: {
                username
            }
        });
    } catch (err) {
       console.error(err);
       return done(err);
    }
    
    if (!user) {
        return done(null, false, { message: 'Incorrect username or password'});
    }

    console.log(user);
    

    // crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
    //     if (err) {
    //         return cb(err);
    //     }

    //     if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
    //         return cb(null, false, { message: 'Incorrect username or password'});
    //     }

    //     return cb(null, row);
    // });
}));

router.get('/login', async (req, res) => {
    res.render('login');
});

router.post('/login/password', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));


module.exports = router;