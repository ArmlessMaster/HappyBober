import React from "react";
import './RadioButton.css';

export const RadioButton = ({ label, value, onChange }) => {

    return (

        <div>
            <label>
                <input type="radio" checked={value} onChange={onChange} />
                {label}
            </label>
        </div>
    )

}