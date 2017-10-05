import React, { Component } from 'react';

class TaskBarButtonItem extends Component {

    handleUpvoteClick(){

    }

    render(){
        const { label, text } = this.props;
        return (
            <div className="level-item">
                <a onClick={() => this.handleUpvoteClick()}>
                    <div className="button-arrow-wrap">
                        <div className="arrow-up"></div>
                    </div>
                    <div className="taskbar-button-label">{label}</div>
                    <div className="taskbar-button-text">{text}</div>
                </a>
            </div>
        );
    }

};

export default TaskBarButtonItem;
