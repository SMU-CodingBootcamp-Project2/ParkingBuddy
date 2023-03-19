const express = require('express');
const router = express.Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email
            },
        });
        if (!userData) {
            res
                .status(400)
                .json({
                    message: 'Incorrect Email or Password'
                })
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            res
                .status(400)
                .json({
                    message: 'Incorrect Email or Password'
                })
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            if(userData.has_admin){
                res.redirect('/admin');
            } else {
                res.redirect('/user');
            }
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;