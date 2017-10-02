import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchProfile } from '../../../actions';
import { goDelegateProfile } from '../../router/routes';
import { setActivePage } from '../../../actions';
import { bindActionCreators } from 'redux';
import ProfilePicture from "./ProfilePicture"
import Banner from "./Banner"

import "./delegate-profile.css"

class DelegatesProfile extends Component {

    constructor(props){
        super(props);
        const { name }  = this.props.match.params
        this.props.fetchProfile(name);

    }

  componentWillMount() {
    this.props.setActivePage(goDelegateProfile);
  }

  renderProfile(delegate) {
    return (
        <div className="hero padded-content is-fullheight delegate-content">
            <div  className="container">
          <div className=" columns">
              <div className="column is-one-quarter main-tile">
                  <section className="main-tile--banner-wrap">
                      <Banner />
                      <ProfilePicture picture={delegate.delegate_img_url} />
                  </section>
                  <section className="main-tile--key-information">
                      <h1>{delegate.delegate_name}</h1>
                      <h2>delegate #23</h2>
                  </section>

                  <section className="column padded-content ">
                      <div className="columns">
                          <div className="column main-tile-label">MAIN WALLET</div>
                          <div className="column main-tile-text">10,123 LSK</div>
                      </div>
                      <div className="columns">
                          <div className="column main-tile-label">VOTING WALLET</div>
                          <div className="column main-tile-text">20,045 LSK</div>
                      </div>
                      <div className="columns">
                          <div className="column main-tile-label">SHARING REWARDS</div>
                          <div className="column main-tile-text">20%</div>
                      </div>
                  </section>
                  <section className="column padded-content">
                      <div className="columns">
                          <div className="column main-tile-label">AFFILIATION</div>
                          <div className="column main-tile-text">--</div>
                      </div>
                  </section>
                  <section className="column padded-content">
                      <div className="columns">
                          <div className="column main-tile-label">FORGING</div>
                          <div className="column main-tile-text">--</div>
                      </div>
                      <div className="columns">
                          <div className="column main-tile-label">TOTAL FORGED</div>
                          <div className="column main-tile-text">20%</div>
                      </div>
                  </section>
                  <section className="column padded-content">
                      <div className="columns">
                          <div className="column main-tile-label">COMMITS TO LISKHQ</div>
                          <div className="column main-tile-text">-</div>
                      </div>
                      <div className="columns">
                          <div className="column main-tile-label">MARKETING EVENTS</div>
                          <div className="column main-tile-text">-</div>
                      </div>
                      <div className="columns">
                          <div className="column main-tile-label">PUBLIC NODE</div>
                          <div className="column main-tile-text">-</div>
                      </div>
                      <div className="columns">
                          <div className="column main-tile-label">SNAPSHOT SERVER</div>
                          <div className="column main-tile-text">-</div>
                      </div>
                  </section>



              </div>
              <div className="column">
                  {/*<div>Likes: {delegate.likes}</div>
                  <div>Application count: {delegate.app_count}</div>
                  <div>Donation 1: {delegate.donations_1}</div>
                  <div>Donation 2: {delegate.donations_2}</div>
                  <div>Donation 3: {delegate.donations_3}</div>
                  <div>Total donations: {delegate.total_donations}</div>
                  <div>Rank: {delegate.ranking}</div>*/}
              </div>
          </div>
            </div>
        </div>
    );
  }

  render() {
    const { delegate } = this.props;
    return <div>{this.renderProfile(delegate)}</div>;
  }
}

const mapStateToProps = state => ({
  delegate: state.delegates.delegate
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchProfile,
      setActivePage: page => setActivePage(page),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(DelegatesProfile);
