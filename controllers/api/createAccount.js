const router = require('express').Router();
const { Resident, User } = require('../../models');


router.post('/createaccount', async (req, res) => {
    try {
        const userData = await User.create({
            email: req.body.username,
            password: req.body.password,
        });
        const residentData = await Resident.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            apartment_number: req.body.apartment_number,
            car_make: req.body.car_make,
            car_model: req.body.car_model,
            car_color: req.body.car_color,
            license_plate: req.body.license_plate,
        });
        req.session.save(() => {
            req.session.loggedIn = true;
            res.redirect('/user');

            res.status(200).json({userData, residentData})
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;