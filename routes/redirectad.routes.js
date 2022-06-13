const { Router } = require('express');
const Link = require('../models/Link');
const router = Router();

router.get('/:code', async (req, res) => {
    try {
        const ad = await Ad.findOne({ code: req.params.code });
        if (ad) {
            return res.redirect(ad.from);
        }
        res.status(404).json('Link not found');
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong, please try again' });
    }
});

module.exports = router;