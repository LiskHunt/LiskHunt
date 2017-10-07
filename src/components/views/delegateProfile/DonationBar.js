import React, { Component } from 'react';
import ContentLabel from "./ContentLabel";

const donations = {
    "total_donations": 11.8,
    "donations": [
        {
            "txid": "8571524797751631045",
            "from": "13724180208900114961L",
            "to": "13779833213219955222L",
            "timestamp": 189175895000,
            "import": "11.80"
        },
        {
            "txid": "8571524797751631045",
            "from": "13724180208900114961L",
            "to": "13779833213219955222L",
            "timestamp": 189175895000,
            "import": "11.80"
        }
    ]
}

class DonationBar extends Component {

    renderContentLabel(){
        if (this.props.donations){
            return this.props.donations.donations.length === 1 ? "1 DONATION" : `${this.props.donations.donations.length} DONATIONS`
        }else{
            return "DONATIONS"
        }
    }

    renderDonations(donations) {
        return donations.map(e => {
            return (
                <div key={e.to + e.import} className="donations-donation">
                    <a href={"https://explorer.lisk.io/address/" + e.to} target="_blank" id="address">address</a>
                    <div>{e.import}</div>
                </div>
            )
        })
    }

    render(){
        const { donations, total_donations } = this.props.donations
        return (
            <div className="donations-bar">
                <ContentLabel name={this.renderContentLabel()} />
                <div className="donations-labels">
                    <div>to</div>
                    <div>amount</div>
                </div>
                {this.renderDonations(donations)}
            </div>
        );
    }


};

export default DonationBar;
