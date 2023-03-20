const express = require('express');
const router = express.Router();
const { Resident, User, Lot } = require('../../models');


router.post('/createaccount', async (req, res) => {
    try {
        const userData = await User.create({
            email: req.body.email,
            password: req.body.password,
        });

        const lotData = await Lot.create({
            is_resident: true,
        });

        const residentData = await Resident.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            apartment_number: req.body.apartment_number,
            car_make: req.body.car_make,
            car_model: req.body.car_model,
            car_color: req.body.car_color,
            license_plate: req.body.license_plate,
            lot_id: lotData.id,
            user_id: userData.id
        });

        req.session.save(() => {
            req.session.user_admin = userData.has_admin;
            req.session.user_id = userData.id;

            res.redirect('/login');
        })
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
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
        const validPassword = userData.checkPassword(req.body.password);
        if (!validPassword) {
            res
                .status(400)
                .json({
                    message: 'Incorrect Email or Password'
                })
            return;
        }
        req.session.save(() => {
            req.session.user_admin = userData.has_admin;
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

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.redirect('/login');
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;