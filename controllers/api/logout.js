const express = require('express');
const router = express.Router();


// needs work
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
            res.redirect('/login');
        });
    } else {
        res.status(404).end();
        
    }
});

module.exports = router;