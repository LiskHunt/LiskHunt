import React, { Component } from 'react';
import ContentLabel from './ContentLabel';
import Pagination from 'react-js-pagination';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class DonationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      size: 5,
    };
  }

  renderContentLabel() {
    if (this.props.donations) {
      return this.props.donations.length === 1
        ? '1 DONATION'
        : `${this.props.donations.length} DONATIONS`;
    } else {
      return 'DONATIONS';
    }
  }

  renderTabelHeaders(){
    if (this.props.donations){
      if (this.props.donations.length !== 0){
        return (<div className="donations-labels">
                  <div>to</div>
                  <div>amount</div>
                </div>)
      }
    }
  }

  handlePageChange(pageNumber) {
    this.setState({ page: pageNumber });
  }

  renderDonations(donations) {
    if (donations && donations.length > 0) {
      const { page, size } = this.state;
      const range_min = donations.length > size ? size * page : 0;
      const range_max = donations.length > size ? size * (page + 1) : 5;
      return (
        <div>
          <div className="donation-wrap">
            {donations.slice(range_min, range_max).map(e => {
              return (
                <div key={e.to + e.import} className="donations-donation">
                  <a
                    href={'https://explorer.lisk.io/address/' + e.to}
                    target="_blank"
                    id="address"
                  >
                    {e.receipientName || e.to}
                  </a>
                  <div>{e.import}</div>
                </div>
              );
            })}
          </div>
          <Pagination
            activePage={this.state.page}
            itemsCountPerPage={this.state.size}
            totalItemsCount={donations.length - 5}
            pageRangeDisplayed={5}
            onChange={page => this.handlePageChange(page)}
          />
        </div>
      );
    } else {
      return <div />;
    }
  }

  render() {
    const rounded_total_donations = this.props.total_donations ? this.props.total_donations.toFixed(2) + " LSK" : ""
    return (
      <div className="donations-bar">
        <ContentLabel name={this.renderContentLabel()} extra={rounded_total_donations} />
          {this.renderTabelHeaders()}
        {this.renderDonations(this.props.donations)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  donations: state.delegates.delegate.donations,
  total_donations: state.delegates.delegate.total_donations,
  delegate: state.delegates.delegate,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DonationBar);
