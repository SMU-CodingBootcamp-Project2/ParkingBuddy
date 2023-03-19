const router = require('express').Router();
const { Resident, User, Lot } = require('../../models');


router.post('/', async (req, res) => {
    try {
            const userData = await User.create({
            email: req.body.email,
            password: req.body.password,
        });

        const lotData = await Lot.create({});

        const residentData = await Resident.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            apartment_number: req.body.apartment_number,
            car_make: req.body.car_make,
            car_model: req.body.car_model,
            car_color: req.body.car_color,
            license_plate: req.body.license_plate,
            lot_id: lotData.id,
        });

        req.session.save(() => {
            req.session.loggedIn = true;
            res.redirect('/user');

        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;