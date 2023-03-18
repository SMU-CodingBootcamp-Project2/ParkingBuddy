const router = require('express').Router();
const { Lot, Resident, User } = require('../../models');

router.get('/admin', async (req, res) => {
    if(!req.sessions.has_admin) {
        res.redirect('./user');
    } else {
        try {
            const adminData = await User.findByPk(req.params.id, {
                include: [
                    {
                        model: Resident,
                        attributes: [
                            'first_name',
                            'last_name',
                            'apartment_number',
                            'license_plate',
                            'lot_id'
                        ]
                    }, 
                    {
                        model: Lot,
                        attributes: [
                            'available_spots',
                            'is_resident'
                        ]
                    },
                ],
                attributes: ['email']
            });

            const admin = adminData.get({ plain: true });
            const userData = await User.findByPk(admin.has_admin, {
                attributes: ['email']
            });
            const user = userData.get({ plain: true });
            res.render('admin', {user, admin, has_admin: req.session.has_admin});
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        };
    };
});



module.exports = router;