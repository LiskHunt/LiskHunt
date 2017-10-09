import React, { Component } from 'react';
import ContentLabel from "./ContentLabel";

import twitter_available from './img/twitter-available.png';
import twitter_unavailable from './img/twitter-unavailable.png';

import reddit_available from './img/reddit-available.png';
import reddit_unavailable from './img/reddit-unavailable.png';

import github_available from './img/github-available.png';
import github_unavailable from './img/github-unavailable.png';

import SocialBarIcon from "./SocialBarIcon";

class SocialBar extends Component {

    render(){
        const { social } = this.props;
        return (
            <div className="social-bar">
                <ContentLabel name="SOCIAL" />
                <div className="social-links-wrap columns is-marginless is-mobile">
                    <SocialBarIcon url={social.twitter} label="twitter" logo_available={twitter_available} logo_unavailable={twitter_unavailable} />
                    <SocialBarIcon url={social.reddit} label="reddit" logo_available={reddit_available} logo_unavailable={reddit_unavailable} />
                    <SocialBarIcon url={social.github} label="github" logo_available={github_available} logo_unavailable={github_unavailable} />
                    <SocialBarIcon />
                </div>
            </div>
        );
    }
};

export default SocialBar;
