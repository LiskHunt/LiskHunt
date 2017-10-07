import React, { Component } from 'react';
import Resources from "./Resources";
import RightBar from "./RightBar";

class Content extends Component {

    render(){
        const { resources } = this.props;
        return (

            <div className="content-wrap columns">
                <Resources resources={resources} />
                <RightBar />
            </div>
        );
    }

};

export default Content;
