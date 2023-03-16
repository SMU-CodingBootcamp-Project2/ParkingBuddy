const router = require('express').Router();
const Resident = require('../../models/Resident');


router.get('/user/:id', async (req, res) => {
    if (!req.session.loggedIn){
        res.redirect('/login');
    } else {
        try {
            const dbUserData = await Resident.findByPk(req.params.id, {
                include: [
                    {
                        model: Resident,
                        attributes: [
                            'first_name',
                            'last_name',
                            'email',
                            'apartment_number',
                            'car_make',
                            'car_model',
                            'car_color',
                            'license_plate'
                        ],
                    },
                ],
            });
            const user = dbUserData.get({ plain: true });
            res.render('user', { user, loggedIn: req.session.loggedIn });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});
