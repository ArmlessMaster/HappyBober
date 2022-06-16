const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    text: { type: String, required: false },
    date: { type: Date, default: Date.now, required: true },
    ad: { type: Types.ObjectId, ref: 'Ad' },
    account: { type: Types.ObjectId, ref: 'Account' }
});


module.exports = model('Report', schema);