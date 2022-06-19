const { Router } = require('express');
const Account = require('../models/Account');
const router = Router();
const auth = require('../middleware/auth.middleware');



router.get('/getmyaccount', auth, async (req, res) => {
    try {

        const account = await Account.findById(req.account.accountId);
        res.json(account);
    } catch (e) {

        res.status(500).json({ message: 'Something went wrong, please try again' });
    }
});




module.exports = router;