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
              be submitted. So let&quot;s say a (d)App, pool, guide, community can be
              submitted to LiskHunt.<br />
            </p>
            <p className="top15">
              If you want to hunt a <strong>new delegate</strong> or a{" "}
              <strong>good resource</strong> that a delegate created. You can
              submit it through our form.
            </p>
            <div className="top40 bottom40 columms">
              <div className="column is-half is-offset-one-quarter">
                <a
                  className="button is-success right30 top15"
                  href="https://goo.gl/forms/aDsGQjV8KcIKediE2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}<i className="fa fa-user right10" /> Submit a delegate
                </a>
                <a
                  className="button is-primary top15"
                  href="https://goo.gl/forms/5QQ16GhrWRbF0Ggt1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    className="fa fa-puzzle-piece right10"
                    aria-hidden="true"
                  />
                  Submit a resource
                </a>
              </div>
            </div>
            <h2 className="title is-size-3">
              How does the Delegate Coolness Score works?
            </h2>
            <div className="content has-text-left">
              The <strong>Coolness score</strong> is there to indicate how is
              the delegate contributing to Lisk.<br />
              The score takes in consideration about multiple factors, such as:<br
              />
              <ul>
                <li>Every application has a score of `100 points`</li>
                <li>Every donated Lisk is `* 0.01`</li>
                <li>Ambassador for Lisk `+ 70`</li>
                <li>Moderator of the Lisk.chat `+ 70`</li>
                <li>Having a public node `+ 10`</li>
                <li>Hosting a Snapshot server `+ 40`</li>
                <li>Github commits `+ 1 per commit`</li>
                <li>Upvotes `+ 1 per upvote`</li>
                <li>Marketing `50 per event`</li>
                <li>Share rewards `* 2`</li>
              </ul>
              <br />
              In the calculation of Score, we will include in the soon future
              more factors, such as the voting weight and so on.
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

NewHunt.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  hideManualSubmit: state.navigation.hideManualSubmit
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setActivePage: page => setActivePage(page),
      setManuelSubmit: type => setManuelSubmit(type)
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(NewHunt);
