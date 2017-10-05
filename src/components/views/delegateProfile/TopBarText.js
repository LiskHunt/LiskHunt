import React from 'react';

const TopBarText = ({ label, text }) => {
    return (
        <div className="level-item">
            <div>
                <p className="topbar-text">{text}</p>
                <p className="topbar-label">{label}</p>
            </div>
        </div>
    );
};

export default TopBarText;
