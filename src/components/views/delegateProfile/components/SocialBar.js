import React, { Component } from 'react';
import ContentLabel from './ContentLabel';

import twitter_available from '../img/twitter-available.png';
import twitter_unavailable from '../img/twitter-unavailable.png';

import reddit_available from '../img/reddit-available.png';
import reddit_unavailable from '../img/reddit-unavailable.png';

import github_available from '../img/github-available.png';
import github_unavailable from '../img/github-unavailable.png';

import SocialBarIcon from './SocialBarIcon';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SocialBar extends Component {
  render() {
    const { twitter, reddit, github } = this.props;
    return (
      <div className="social-bar">
        <ContentLabel name="CONTACT" />
        <div className="social-links-wrap columns is-marginless is-mobile">
          <SocialBarIcon
            url={twitter}
            label="twitter"
            logo_available={twitter_available}
            logo_unavailable={twitter_unavailable}
          />
          <SocialBarIcon
            url={reddit}
            label="reddit"
            logo_available={reddit_available}
            logo_unavailable={reddit_unavailable}
          />
          <SocialBarIcon
            url={github}
            label="github"
            logo_available={github_available}
            logo_unavailable={github_unavailable}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  twitter: state.delegates.delegate.twitter,
  reddit: state.delegates.delegate.reddit,
  github: state.delegates.delegate.github,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SocialBar);
