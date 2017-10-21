import React, { Component } from 'react';

class TopBarButton extends Component {

    handleUpvoteClick(){

    }

    render(){
        const { label, text } = this.props;
        return (
            <div className="level-item topbar-button">
                <a onClick={() => this.handleUpvoteClick()}>
                    <div className="button-arrow-wrap">
                        <div className="arrow-up"></div>
                    </div>
                    <div className="topbar-button-label">{label}</div>
                    <div className="topbar-button-text">{text}</div>
                </a>
            </div>
        );
    }

};

export default TopBarButton;
