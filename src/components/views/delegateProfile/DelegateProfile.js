import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchProfile } from '../../../actions';
import { goDelegateProfile } from '../../router/routes';
import { setActivePage } from '../../../actions';
import { bindActionCreators } from 'redux';
import ProfilePicture from "./ProfilePicture"
import Banner from "./Banner"


import "./delegate-profile.css"
import MainInformation from "./MainInformation";

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

                  <MainInformation/>

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
