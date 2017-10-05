import React from 'react';
import TaskBarFieldItem from "./TaskBarFieldItem";
import TaskBarButtonItem from "./TaskBarButtonItem";


const Taskbar = ({ coolnessScore , appCount, ranking }) => {
    return (
        <div className="column taskbar">
            <div className="level">
                <TaskBarFieldItem label="COOLNESS SCORE" text={coolnessScore} />
                <TaskBarFieldItem label="APPLICATIONS" text={appCount} />
                <TaskBarFieldItem label="RANKING" text={ranking} />
                <TaskBarButtonItem label="UPVOTE" text={1500} />
            </div>
        </div>
    );
};

export default Taskbar;
