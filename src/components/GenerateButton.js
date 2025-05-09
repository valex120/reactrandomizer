import React from "react";
import "./GenerateButton.css";

const GenerateButton = ({ onClick, text = "Сгенерировать" }) => {
    return (
        <button className="generate-button" onClick={onClick}>
            {text}
        </button>
    );
};

export default GenerateButton;
