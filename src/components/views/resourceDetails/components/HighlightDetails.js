import app_settings from '../../../../config';

import React, { Component } from 'react';
import axios from 'axios';

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
      <div className="container has-text-centered">
        <nav className="level">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Views</p>
              <p className="title">
                {this.props.views}
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Category</p>
              <span className={"category-label " + this.labelClassName(resource.category)}>
                <p className="">
                  #{resource.category}
                </p>
              </span>
            </div>
          </div>
          <div className="level-item has-text-centered title-item">
            <div>
              <p className="heading">App Name</p>
              <a className="title">
                {resource.app_name} <br className="" />
                <span className="visit-website">
                  <a
                    href={resource.app_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button is-small is-outlined is-static top20"
                  >
                    <i className="fa fa-external-link" aria-hidden="true" />
                    Visit website{' '}
                  </a>
                </span>
              </a>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Author</p>
              <p className="title">
                @{resource.author}
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Likes</p>
              <p className="title">
                <a onClick={this.addUpVote}>
                  {this.props.votes}
                  {this.displayCaret()}
                </a>
              </p>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default HighlightDetails;
