import express from 'express';
import { verifyJWTToken } from "../utils";
import {IUser} from '../models/user';
import jwt from "jsonwebtoken";
const config = require('config');

export default (req: any, res: any, next: any) => {

    if (req.path === '/user/signin' || req.path === '/user/signup') {

        return next();
    }
    const token = req.headers.token;
    const decoded = jwt.verify(token, config.get('jwtSecret') || "");
    verifyJWTToken(token).then((user: any) => {
        req.user = user.data._doc;
        next();
    }).catch(() => {
        res.status(403).json({ message: `Invalid auth token provided.` });
      });
    
}