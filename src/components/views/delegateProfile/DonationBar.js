import React, { Component } from 'react';
import ContentLabel from "./ContentLabel";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class DonationBar extends Component {

    renderContentLabel(){
        if (this.props.donations){
            return this.props.donations.length === 1 ? "1 DONATION" : `${this.props.donations.length} DONATIONS`
        }else{
            return "DONATIONS"
        }
    }

    renderDonations(donations) {
        if (donations){
            return donations.map(e => {
                return (
                    <div key={e.to + e.import} className="donations-donation">
                        <a href={"https://explorer.lisk.io/address/" + e.to} target="_blank" id="address">address</a>
                        <div>{e.import}</div>
                    </div>
                )
            })
        }else{
            return (
                <div></div>
            )
        }

    }

    render(){
        return (
            <div className="donations-bar">
                <ContentLabel name={this.renderContentLabel()} />
                <div className="donations-labels">
                    <div>to</div>
                    <div>amount</div>
                </div>
                {this.renderDonations(this.props.donations)}
            </div>
        );
    }


};

const mapStateToProps = state => ({
    donations : state.delegates.delegate.donations,
    total_donations : state.delegates.delegate.total_donations,
    delegate : state.delegates.delegate
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DonationBar);
