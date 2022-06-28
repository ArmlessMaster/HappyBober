import express from 'express';
import socket from "socket.io";

import { MessageModel, DialogModel } from "../models";

class MessageController{
    io: socket.Server; 
    
    constructor(io: socket.Server) {
        this.io = io;
    }

    updateReadStatus = (res: express.Response, userId: string, dialogId: string) => {
        MessageModel.updateMany({ dialog: dialogId, user: { $ne: userId } }, { $set: { read: true } }, (err: any) => {
            if (err) {
                res.status(500).json({
                    status: "error",
                    message: err,
                });
            } else {
                this.io.emit("SERVER:MESSAGES_READED", {
                  userId,
                  dialogId,
                });
            }
        });
    }
    
    index = (req: any, res: express.Response) => {
        const dialogId: string = req.query.dialog as string;
        const userId: string = req.user._id;

        MessageModel.updateMany({ dialog: dialogId, user: { $ne: userId } }, { $set: { readed: true } }, (err: any) => {
            if (err) {
                res.status(500).json({
                    status: "error",
                    message: err,
                });
            }
        });

        MessageModel.find({ dialog: dialogId }).populate(["dialog", "user", "attachments"]).exec(function (err, messages) {
            if (err) {
                return res.status(404).json({ status: "error", message: 'Messages not found' });
            }
            return res.json(messages);
        });
    }

    create = (req: any, res: express.Response) => {
        const userId = req.user._id;

        const postData = {
            text: req.body.text,
            dialog: req.body.dialog_id,
            attachments: req.body.attachments,
            user: userId,
        }
        const message = new MessageModel(postData);

        message.save().then((obj: any) => {

            obj.populate(["dialog", "user", "attachments"], (err: any, message: any) => {
                if (err) {
                    return res.status(500).json({ status: "error", message: err });
                }

                DialogModel.findOneAndUpdate( { _id: postData.dialog }, { lastMessage: message._id }, { upsert: true }, function (err) {
                    if (err) {
                        return res.status(500).json({
                            status: "error",
                            message: err,
                    });
                  }
                });

                res.json(message);
                this.io.emit("SERVER:NEW_MESSAGE", message);
            });
        }).catch((reason: any) =>{
            res.json(reason);
        });
    }

    delete = (req: any, res: express.Response) => {
        const id: string = req.query.id;
        const userId: string = req.user._id;

        MessageModel.findById(id, (err: any, message: any) => {
            if (err || !message) {
                return res.status(404).json({
                    status: "error",
                    message: "Message not found",
                });
            }
            if (message.user.toString() === userId) {
                const dialogId = message.dialog;
                message.remove();

                MessageModel.findOne({ dialog: dialogId }, {}, { sort: { created_at: -1 } }, (err, lastMessage) => {
                    if (err) {
                        res.status(500).json({
                            status: "error",
                            message: err,
                        });
                    }

                    DialogModel.findById(dialogId, (err: any, dialog: any) => {
                        if (err) {
                          res.status(500).json({
                            status: "error",
                            message: err,
                          });
                        }
          
                        dialog.lastMessage = lastMessage;
                        dialog.save();
                      });
                });

                return res.json({
                    status: "success",
                    message: "Message deleted",
                  });
            } else {
                return res.status(403).json({
                    status: "error",
                    message: "Not have permission",
                });
            }
        });
    }
}

export default MessageController;