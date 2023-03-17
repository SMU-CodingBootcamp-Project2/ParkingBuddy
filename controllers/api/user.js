const router = require('express').Router();
const { Resident, User } = require('../../models');


router.get('/user', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        try {
            const dbResidentData = await Resident.findByPk(req.params.id, {
                include: [
                    {
                        model: User,
                        attributes: ['email']
                    },
                ],
                attributes: [
                    'first_name',
                    'last_name',
                    'apartment_number',
                    'car_make',
                    'car_model',
                    'car_color',
                    'license_plate'
                ],
            });

            const resident = dbResidentData.get({ plain: true });
            const dbUserData = await User.findByPk(req.params.id, {
                attributes: ['email']
            });
            const user = dbUserData.get({ plain: true });
            res.render('user', {user, resident, loggedIn: req.session.loggedIn });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

module.exports = router;
