import express from 'express';
import { UploadFileModel } from "../models";
import cloudinary from "../core/cloudinary";

class UserController{

    create = (req: any, res: express.Response) => {
        const userId: string = req.user._id;
        const file: any = req.file;
        
        cloudinary.v2.uploader
          .upload_stream(
            { resource_type: "auto" },
            (
                error: cloudinary.UploadApiErrorResponse | undefined,
                result: cloudinary.UploadApiResponse | undefined
            ) => {
              if (error || !result) {
                return res.status(500).json({
                  status: "error",
                  message: error || "upload error",
                });
              }
              const fileData: Pick<
              cloudinary.UploadApiResponse,
              "filename" | "size" | "ext" | "url" | "user"
            > = {
                filename: result.original_filename,
                size: result.bytes,
                ext: result.format,
                url: result.url,
                user: userId,
            };
    
              const uploadFile = new UploadFileModel(fileData);
    
              uploadFile
                .save()
                .then((fileObj: any) => {
                  res.json({
                    status: "success",
                    file: fileObj,
                  });
                })
                .catch((err: any) => {
                  res.json({
                    status: "error",
                    message: err,
                  });
                });
            }
          ).end(file.buffer);
    }

    delete = (req: any, res: express.Response) => {
        const fileId: string = req.user._id;
        UploadFileModel.deleteOne({ _id: fileId }, function (err: any) {
            if (err) {
                return res.status(500).json({
                status: "error",
                message: err,
                });
            }
            res.json({
                status: "success",
            });
        });
    }
   
}

export default UserController;