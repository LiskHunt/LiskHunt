import React, { Component } from 'react';
import Resources from "./Resources";
import RightBar from "./RightBar";

class Content extends Component {

    render(){
        const { resources, social } = this.props;
        return (

            <div className="content-wrap columns">
                <Resources resources={resources} />
                <RightBar social={social} />
            </div>
        );
    }

};

export default Content;
