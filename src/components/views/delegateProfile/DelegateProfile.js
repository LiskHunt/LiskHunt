import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchProfile } from '../../../actions';
import { goDelegateProfile } from '../../router/routes';
import { setActivePage } from '../../../actions';
import { bindActionCreators } from 'redux';
import ProfilePicture from "./ProfilePicture"
import Banner from "./Banner"
import TextWrap from "./TextWrap"
import Column from "./Column"

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

  renderColumns(){
      const section1  = [{ label : "MAIN WALLET", text : "10,123 LSK"}, { label : "VOTING WALLET", text : "20,045 LSK"},
          { label : "SHARING REWARDS", text : "20%"}]
      const section2  = [{ label : "AFFILIATION", text : "--"}]
      const section3  = [{ label : "FORGING", text : "--"}, { label : "TOTAL FORGED", text : "--"}]
      const section4  = [{ label : "COMMITS TO LISKHQ", text : "--"}, { label : "MARKETING EVENTS", text : "--"},
          { label : "PUBLIC NODE", text : "--"}, { label : "SNAPSHOT SERVER", text : "--"}]

      return (
          <div>
              <Column fields={section1} />
              <Column fields={section2} />
              <Column fields={section3} />
              <Column fields={section4} />
          </div>
      );
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

                  {this.renderColumns()}

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
