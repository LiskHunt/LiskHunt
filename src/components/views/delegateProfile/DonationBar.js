import React, { Component } from 'react';
import ContentLabel from "./ContentLabel";

class DonationBar extends Component {

    render(){
        return (
            <div className="donations-bar">
                <ContentLabel name="DONATIONS" />

            </div>
        );
    }

};

export default DonationBar;
