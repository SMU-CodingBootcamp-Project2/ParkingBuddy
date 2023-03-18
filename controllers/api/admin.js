const router = require('express').Router();
const { Lot, Resident, User } = require('../../models');

router.get('/admin', async (req, res) => {
    try {
        const adminData = await User.findByPk(req.sessions.id, {
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
                    ]
                },
            ],
            attributes: ['email']
        });

        const admin = adminData.get({ plain: true });
        const lotData = await Lot.findAll({
            attributes: ['available_spots'],
            raw: true
        });
        const residentData = await Resident.findAll({
            include: [
                {
                    model: Lot,
                    attributes: ['available_spots']
                }
            ],
            attributes: [
                'first_name',
                'last_name',
                'apartment_nubmer',
                'license_plate'
            ],
            raw: true
        });
        const residents = residentData.map((resident) => {
            const lot = resident.Lot;
            delete resident.Lot;
            resident.available_spots = lot.available_spots;
            return resident;
        });
        res.render('admin', { admin, lotData, residents, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});



module.exports = router;