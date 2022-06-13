const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    title: { type: String, required: true },
    picture: { type: String, required: true },
    description: { type: String, required: true }
});


module.exports = model('Achievment', schema);