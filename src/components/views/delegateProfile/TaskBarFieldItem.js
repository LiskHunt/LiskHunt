import React from 'react';

const TaskBarFieldItem = ({ label, text }) => {
    return (
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">{text}</p>
                <p class="title">{label}</p>
            </div>
        </div>
    );
};

export default TaskBarFieldItem;
