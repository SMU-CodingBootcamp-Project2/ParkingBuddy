const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const { User } = require('../../models');

let user;

passport.use(new LocalStrategy.Strategy({ usernameField: 'email' }, async (username, password, done) => {
    try {
        user = await User.findOne({
            where: {
                email: username
            }
        })
        console.log(user);


        if (!user) {
            return done(null, false, { message: 'Incorrect Username or Password' });
        };

        const validPassword = user.checkPassword(password);
        if (!validPassword) {
            return done(null, false, { message: 'Incorrect Username or Password' });;
        }

        return done(null, user);
    } catch (error) {
        return done(error);
    }
}));

passport.serializeUser(function (user, done) {
 
    done(null, user.id);
});

passport.deserializeUser(function (user, done) {
    
    done(null, user);
})



router.post('/', passport.authenticate('local', {
    // successRedirect: '/user'
    failureRedirect: '/login',
    // badRequestMessage: 'Incorrect Username or Password',
    failureMessage: true
}), (req, res) => {
    req.session.logged_in = true;
    if (user.has_admin) {
        res.redirect('/admin');
    } else {
        res.redirect('/user');
    }
    
});




module.exports = router;