import React from "react";
import './FireBaseUploader.css';

export const FireBaseUploader = ({ handleChange, handleUpload }) => {
    return (
        <div>
            <input type="file" multiple onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    )

}