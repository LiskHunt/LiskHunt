import app_settings from '../../../../config';

import React, { Component } from 'react';
import axios from 'axios';


import HighlightDetailsMobile from './mobile/Highlight_mobile'
import HighlightDetailsDesktop from './desktop/Highlight_desktop'

import { labels } from '../../../../lib/resources/resources';

class HighlightDetails extends Component {
  displayCaret = () => {
    if (!this.props.upVoted)
      return (
        <i
          className="fa fa-caret-up left10 has-text-success"
          id="upvote-btn"
          aria-hidden="true"
        />
      );
  };

  labelClassName = category => {
    return `tag ${labels[category]}`;
  };

  addUpVote = async () => {
    document
      .getElementById('upvote-btn')
      .classList.add('slide-out-elliptic-top-bck');
    await axios
      .get(`${app_settings.backend_url}/add_vote/${this.props.app_id}`)
      .catch(function(error) {
        console.error(error, 'error');
      });

    this.timeout = setTimeout(this.props.getVotes, 800);
  };

  render() {
    let resource = this.props.resource;
    return (
      <div className="">

        <
          HighlightDetailsDesktop
          resource={resource}
          addUpVote={this.addUpVote}
          labelClassName={this.labelClassName}
          displayCaret={this.displayCaret}
          votes={this.props.votes}
          views={this.props.views}
        />

        <
          HighlightDetailsMobile
          resource={resource}
          addUpVote={this.addUpVote}
          labelClassName={this.labelClassName}
          displayCaret={this.displayCaret}
          votes={this.props.votes}
          views={this.props.views}
        />



      </div>
    );
  }
}

export default HighlightDetails;
