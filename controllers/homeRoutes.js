const router = require('express').Router();
const { Resident, User } = require('../models');


router.get('/', async (req, res) => {
    res.render('homepage');
});

router.get('/login', async (req, res) => {
    console.log(req.session.user_admin);
    if (req.session.logged_in) {
        if (req.session.user_admin) {
            res.redirect('/admin');
        } else {
            res.redirect('/user');
        }
    } else {
        res.render('login');
    }
    
});

router.get('/user', async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        if (req.session.user_admin) {
            res.redirect('/admin')
        } else {
            const residentData = await Resident.findAll({
                attributes: ['first_name', 'last_name', 'license_plate', 'car_make', 'car_model', 'car_color', 'apartment_number']               
            });
            const residents = residentData.map((resident) =>  resident.get({ plain: true }));
            res.render('user', {
                residents,
            });
        }
        
    }
    
});

router.get('/admin', async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        if (!req.session.user_admin) {
            res.redirect('/user');
        } else {
            res.render('admin');
        }
        
    }
    
});

router.get('/createaccount', async (req, res) => {
    res.render('createaccount');
});

module.exports = router;