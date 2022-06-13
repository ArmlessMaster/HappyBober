const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    text: { type: String, required: true },
    rating: { type: Number, required: true },
    date: { type: String, required: true },
    receiver: { type: Types.ObjectId, ref: 'Account' },
    sender: { type: Types.ObjectId, ref: 'Account' }
});


module.exports = model('Rewiev', schema);