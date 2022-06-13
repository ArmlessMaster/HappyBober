const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    date: { type: Date, default: Date.now, required: true },
    isRead: { type: Boolean, required: true },
    receiver: { type: Types.ObjectId, ref: 'Account' },
    sender: { type: Types.ObjectId, ref: 'Account' }
});


module.exports = model('Message', schema);