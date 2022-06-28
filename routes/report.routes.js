const { Router } = require('express');
const Report = require('../models/Report');

const router = Router();
const auth = require('../middleware/auth.middleware');


router.post('/createreport', auth, async (req, res) => {
    try {

        const { cause, reportType, ad, account } = req.body;

        if (reportType === 'user') {
            const report = new Report({
                cause, reportType, account: account._id, sender: req.account.accountId
            });
            await report.save(function (err) {
                console.log(err);
            });
            res.status(201).json({ message: 'Report created' });

        }
        if (reportType === 'ad') {
            const report = new Report({
                cause, reportType, ad: ad._id, sender: req.account.accountId
            });
            await report.save(function (err) {
                console.log(err);
            });
            res.status(201).json({ message: 'Report created' });
        }
    } catch (e) {

        res.status(500).json({ message: 'Something went wrong, please try again' });
    }
});

router.get('/reports', async (req, res) => {
    try {
        const reports = await Report.find();
        res.json(reports);
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong, please try again' });
    }
});

router.delete('/delete/:id', auth, async (req, res) => {
    try {
        const id = req.params.id;
        await Report.deleteOne({ _id: id });
        res.json({ message: 'Report removed' });
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong, please try again' });
    }
});



module.exports = router;