import React, { Component } from 'react';

import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Content from "./Content";

class DesktopContent extends Component {

    render(){
        return (
            <div className="delegate-content hero-body">
                <div className="columns">
                    <Sidebar />
                    <div className=" right-section-wrap">
                        <TopBar />
                        <Content />
                    </div>
                </div>
            </div>
        );
    }

};

export default DesktopContent;
