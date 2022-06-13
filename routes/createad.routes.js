const { Router } = require('express');
const Ad = require('../models/Ad');
const router = Router();
const auth = require('../middleware/auth.middleware');

router.post('/createad', auth, async (req, res) => {
    try {
        const { type, gender, color, information, age, breed, price, animalName, picture } = req.body;
        const ad = new Ad({
            type, gender, color, information, age, breed, price, animalName, isTop: false,
            account: req.account.accountId, picture
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