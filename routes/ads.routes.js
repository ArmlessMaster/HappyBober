const { Router } = require('express');
const Ad = require('../models/Ad');

const router = Router();
const auth = require('../middleware/auth.middleware');

router.get('/getads', async (req, res) => {
    try {
        const ads = await Ad.find();
        res.json(ads);
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong, please try again' });
    }
});

router.get('/getmyads', auth, async (req, res) => {
    try {
        const ads = await Ad.find({ account: req.account.accountId });

        res.json(ads);
    } catch (e) {

        res.status(500).json({ message: 'Something went wrong, please try again' });
    }
});

router.get('/:id', async (req, res) => {
    try {

        const ads = await Ad.findById(req.params.id);
        res.json(ads);
    } catch (e) {

        res.status(500).json({ message: 'Something went wrong, please try again' });
    }
});

router.post('/createad', auth, async (req, res) => {
    try {
        const { type, gender, color, information, age, breed, price, animalName, picture, location } = req.body;
        const ad = new Ad({
            type, gender, color, information, age, breed, price, animalName, isTop: false,
            account: req.account.accountId, picture, location
        });



        await ad.save(function (err) {
            console.log(err);
        });



        res.status(201).json({ message: 'Ad created' });

    } catch (e) {

        res.status(500).json({ message: 'Something went wrong, please try again' });
    }
});



module.exports = router;