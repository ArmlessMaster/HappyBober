import mongoose, { Schema, Document, Types } from "mongoose";
import validator from "validator";
import { generatePasswordHash } from '../utils';
import { differenceInMinutes } from 'date-fns'

export interface IUser extends Document{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    registeredAt: Date;
    lastLogin: Date;
    userType: string;
    isSubscriber: boolean;
    appLanguage: string;
    expirySubscription: Date;
    photo: string;
    region: string;
    description: string;
    website: string;
    favourites: [{type: Schema.Types.ObjectId; ref: string;}];
}

const UserSchema = new Schema({
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: false, unique: true },
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
    favourites: [{ type: Schema.Types.ObjectId }]
});

UserSchema.virtual("isOnline").get(function (this: any) {
    return differenceInMinutes(new Date(), this.last_seen) < 5;
});

UserSchema.set("toJSON", {
    virtuals: true,
});

UserSchema.pre('save', function(next) {
    const user: IUser = this;

    if (!user.isModified('password')) return next();

    generatePasswordHash(user.password).then(hash => {
        user.password = String(hash);
    }).catch(err => {
        next(err);
    });
});

const UserModel = mongoose.model<IUser>('Account', UserSchema);

export default UserModel;