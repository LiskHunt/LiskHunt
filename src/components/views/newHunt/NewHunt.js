import AnimationsWrapper from '../../animations-wrapper/AnimationsWrapper';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './newHunt.css';

class NewHunt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideManualSubmit: true,
    };
  }

  togleHideManualSubmit = () => {
    return this.setState({ hideManualSubmit: !this.state.hideManualSubmit });
  };

  isManualSubmitHidden = () => {
    return this.state.hideManualSubmit ? 'leave-transform' : 'enter-transform';
  };

  render() {
    return (
      <AnimationsWrapper>
        <div className="hero-body padded-content">
          <div className="container has-text-centered">
            <h1 className="title is-size-1">Submit something new!</h1>
            <h2 className="subtitle top10">
              Did you hunt a new lisk resouce? Did you develop something cool?
            </h2>
            <p className="">
              Basically everything that is a resource for the Lisk ecosystem can
              be submitted. So let's say a (d)App, pool, guide, community can be
              submitted to LiskHunt.<br />
              In order to submit a new hunt, you can create a new{' '}
              <strong>Pull-Request</strong> to our repository on Github. You'll
              just need to add the app to <code>resource.json</code>, commit and
              submit the PR.
            </p>
            <div className="top40 bottom40 columms">
              <div className="column is-half is-offset-one-quarter">
                <a className="button is-success right30 top15">
                  {' '}<i className="fa fa-github" /> Submit on Github
                </a>
                <a
                  className="button is-warning top15"
                  onClick={this.togleHideManualSubmit}
                >
                  Submit without Github
                </a>
              </div>
            </div>
            <div className={'content ' + this.isManualSubmitHidden()}>
              No problem, please send an email to <br />
              <code>carbonara [at] lisk.rocks</code>
              <br /> covering the following fields:
              <div className="column is-half is-offset-one-quarter has-text-left">
                <blockquote className="top20 bottom20">
                  <ul className="has-text-dark">
                    <li>Resource Name</li>
                    <li>Short description, max 120 chars</li>
                    <li>Long description</li>
                    <li>Category [Pool, App, Script, Community, Bot]</li>
                    <li>Author (if any)</li>
                    <li>Images (Recommended: 720x540px)</li>
                    <li>URL</li>
                  </ul>
                </blockquote>
              </div>
            </div>
            <h2 className="title is-size-3">
              I have an idea and I want to contribute to LiskHunt.
            </h2>
            <p className="">
              This is awesome, feel free to propose your changes about LiskHunt
              on github. We would be so proud of you!
            </p>
          </div>
        </div>
      </AnimationsWrapper>
    );
  }
}

export default NewHunt;

NewHunt.contextTypes = {
  router: PropTypes.object.isRequired,
};
