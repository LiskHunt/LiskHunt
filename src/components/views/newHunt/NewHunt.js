import AnimationsWrapper from '../../animations-wrapper/AnimationsWrapper';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './newHunt.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goSubmitHunt } from '../../router/routes';
import { setActivePage, setManuelSubmit } from '../../../actions';

class NewHunt extends Component {
  componentWillMount() {
    this.props.setActivePage(goSubmitHunt);
  }

  toggleHideManualSubmit = () => {
    const manual = this.props.hideManualSubmit == true ? false : true;
    this.props.setManuelSubmit(manual);
  };

  isManualSubmitHidden = () => {
    return this.props.hideManualSubmit ? 'leave-transform' : 'enter-transform';
  };

  render() {
    return (
      <AnimationsWrapper>
        <div className="container hero-body padded-content bottom20">
          <div className="container has-text-centered max-size-limited">
            <h1 className="title is-size-1">Submit something new!</h1>
            <h2 className="subtitle top10">
              Did you hunt a new lisk resource? Did you develop something cool?
              Are you a delegate?
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
            <p className="top15">
              If you want to hunt a <strong>new delegate</strong> or a{' '}
              <strong>good action</strong> that a delegate did. You can still
              submit it through Github or by email/lisk.chat.
            </p>
            <div className="top40 bottom40 columms">
              <div className="column is-half is-offset-one-quarter">
                <a
                  className="button is-success right30 top15"
                  href="https://github.com/xunga/Lisk-hunt"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {' '}
                  <i className="fa fa-github right10" /> Submit on Github
                </a>
                <a
                  className="button is-primary top15"
                  onClick={() => this.toggleHideManualSubmit()}
                >
                  <i
                    className="fa fa-puzzle-piece right10"
                    aria-hidden="true"
                  />
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
                    <li>Long description (In markdown please)</li>
                    <li>Category [Pool, App, Script, Community, Bot]</li>
                    <li>Author (if any)</li>
                    <li>Images (Recommended: 720x540px)</li>
                    <li>URL</li>
                  </ul>
                </blockquote>
              </div>
            </div>
            <h2 className="title is-size-3">
              How does the Delegate Coolness Score works?
            </h2>
            <p className="content has-text-left">
              The <strong>Coolness score</strong> is there to indicate how is
              the delegate contributing to Lisk.<br />
              The score takes in consideration about multiple factors, such as:<br
              />
              <ul>
                <li>Resources developed</li>
                <li>Likes in the applications</li>
                <li>Donations ( To any cause related to Lisk )</li>
              </ul>
              Which:<br />
              <br />
              Every application has a score of 10 points.<br />
              <br />
              Every like is 1 point.<br />
              <br />
              Donations are divided in 3 tiers, with different scoring.<br />
              Donations from 0 to 100 Lisk are scored as 1 point.<br />
              Donations from 100 to 500 Lisk are scored as 5 points.<br />
              Donations from 500+ Lisk are scored as 7 points.<br />
              <br />
              In the calculation of Score, we will include in the soon future:
              Ambassadors, Mods of the lisk chat and whatever cool idea will
              come from the community.
            </p>
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

NewHunt.contextTypes = {
  router: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  hideManualSubmit: state.navigation.hideManualSubmit,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setActivePage: page => setActivePage(page),
      setManuelSubmit: type => setManuelSubmit(type),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(NewHunt);
