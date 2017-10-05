import React from 'react';

const TextWrap = ({ label, text }) => {
    return (
        <div className="columns">
            <div className="column sidebar-label">{label}</div>
            <div className="column sidebar-text">{text}</div>
        </div>
    );
};

export default TextWrap;
