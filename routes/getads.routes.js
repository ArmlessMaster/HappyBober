const { Router } = require('express');
const Ad = require('../models/Ad');
const router = Router();
const auth = require('../middleware/auth.middleware');

router.get('/getads', auth, async (req, res) => {
    try {
        const ads = await Ad.find();

        res.json(ads);
    } catch (e) {

        res.status(500).json({ message: 'Something went wrong, please try again' });
    }
});

router.get('/:id', auth, async (req, res) => {
    try {
        const ads = await Ad.findById(req.params.id);

        res.json(ads);
    } catch (e) {

        res.status(500).json({ message: 'Something went wrong, please try again' });
    }
});


module.exports = router;