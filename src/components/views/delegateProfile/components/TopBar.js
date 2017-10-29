import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TopBarText from './TopBarText';
import TopBarButton from './TopBarButton';

class TopBar extends Component {
  render() {
    const { coolness_score, app_count, ranking } = this.props;
    return (
      <div className="column topbar">
        <div className="level">
          <TopBarText label="COOLNESS SCORE" text={coolness_score} />
          <TopBarText label="APPLICATIONS" text={app_count} />
          <TopBarText label="RANKING" text={ranking} />
          <TopBarButton label="UPVOTE" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  coolness_score: state.delegates.delegate.coolness_score,
  app_count: state.delegates.delegate.app_count,
  ranking: state.delegates.delegate.ranking,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
