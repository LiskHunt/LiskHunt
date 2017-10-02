import React from 'react';

const TextWrap = ({ label, text }) => {
    return (
        <div className="columns">
            <div className="column main-tile-label">{label}</div>
            <div className="column main-tile-text">{text}</div>
        </div>
    );
};

export default TextWrap;
