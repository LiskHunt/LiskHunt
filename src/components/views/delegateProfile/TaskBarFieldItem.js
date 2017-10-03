import React from 'react';

const TaskBarFieldItem = ({ label, text }) => {
    return (
        <div className="level-item">
            <div>
                <p className="taskbar-text">{text}</p>
                <p className="taskbar-label">{label}</p>
            </div>
        </div>
    );
};

export default TaskBarFieldItem;
