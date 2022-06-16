import React from "react";
import './FireBaseUploader.css';

export const FireBaseUploader = ({ handleChange }) => {
    return (
        <div>
            <input type="file" multiple onChange={handleChange} />
        </div>
    )

}