const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    registeredAt: { type: Date, default: Date.now, required: true },
    lastLogin: { type: Date, default: Date.now, required: true },
    userType: { type: String, enum: ['user', 'admin', 'moderator', 'shelter'], default: 'user', required: true },
    isSubscriber: { type: Boolean, default: false, required: true },
    appLanguage: { type: String, default: 'en', required: true },
    expirySubscription: { type: Date, required: false },
    photo: { type: String, required: false },
    region: { type: String, required: false },
    description: { type: String, required: false },
    website: { type: String, required: false },
    favourites: [{ type: Types.ObjectId }]
});


module.exports = model('Account', schema);