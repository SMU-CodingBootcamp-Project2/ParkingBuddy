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

        console.log({user_id:req.session.user_id})
        let userInfo = await Resident.findOne({where: {user_id:req.session.user_id}})
        userInfo = userInfo.get({plain:true})
        console.log(userInfo)


        if (req.session.user_admin) {
            res.redirect('/admin')
        } else {
            
            res.render('user', {
                residents:[userInfo],
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