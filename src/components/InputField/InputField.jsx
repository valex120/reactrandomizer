import React from "react";
import "./InputField.css";

const InputField = ({ label, value, onChange }) => {
    return (
        <div className="input-container">
            <label>{label}:</label>
            <input
                type="number"
                value={value}
                onChange={onChange}
                className="input-field"
            />
        </div>
    );
};

export default InputField;
