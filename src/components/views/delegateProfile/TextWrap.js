import React from 'react';

const TextWrap = ({ label, text }) => {
    return (
        <div className="columns is-mobile">
            <div className="column sidebar-label is-half-mobile">{label}</div>
            <div className="column sidebar-text is-half-mobile">{text}</div>
        </div>
    );
};

export default TextWrap;
