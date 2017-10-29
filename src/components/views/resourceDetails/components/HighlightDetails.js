import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addVote } from '../../../../actions/index';

import HighlightDetailsMobile from './mobile/Highlight_mobile';
import HighlightDetailsDesktop from './desktop/Highlight_desktop';

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
    return `tag ${this.props.labels[category]}`;
  };

  addUpVote = async () => {
    document
      .getElementById('upvote-btn')
      .classList.add('slide-out-elliptic-top-bck');

    this.props.addVote(this.props.app_id);
    this.timeout = setTimeout(this.props.getVotes, 800);
  };

  render() {
    let resource = this.props.resource;
    return (
      <div className="">
        <HighlightDetailsDesktop
          resource={resource}
          addUpVote={this.addUpVote}
          labelClassName={this.labelClassName}
          displayCaret={this.displayCaret}
          votes={this.props.votes}
          views={this.props.views}
        />

        <HighlightDetailsMobile
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

const mapStateToProps = state => ({
  labels: state.resources.labels,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addVote: id => addVote(id),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(HighlightDetails);
