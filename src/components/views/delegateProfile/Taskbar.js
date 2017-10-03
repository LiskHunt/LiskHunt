import React from 'react';
import TaskBarFieldItem from "./TaskBarFieldItem";


const Taskbar = ({ pictureUrl, name }) => {
    return (
        <div className="column taskbar">
            <div className="level">
                <TaskBarFieldItem label="COOLNESS SCORE" text="3,456" />
                <TaskBarFieldItem label="APPLICATIONS" text="123" />
                <TaskBarFieldItem label="RANKING" text="456K" />
                <div class="level-item has-text-centered">
                    <div>
                        <button>sdfadfasd</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Taskbar;
