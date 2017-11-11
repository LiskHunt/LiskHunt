import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class CoolnessScore extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  renderScore() {
    if (this.state.expanded) {
      return (
        <div>
          <div className="coolness-section">
            <div className="coolness-criteria">appsLikes</div>
            <div className=" coolness-arithmetic">+</div>
            <div className=" coolness-criteria">apps.length * 100</div>
            <div className=" coolness-arithmetic">+</div>
            <div className=" coolness-criteria">donations * 0.01</div>
            <div className=" coolness-arithmetic">+</div>
            <div className=" coolness-criteria">public node === 10</div>
            <div className=" coolness-arithmetic">+</div>
            <div className=" coolness-criteria">snapshot_server === 40</div>
            <div className=" coolness-arithmetic">+</div>
            <div className=" coolness-criteria">github_commits</div>
            <div className=" coolness-arithmetic">+</div>
            <div className=" coolness-criteria">upvotes</div>
            <div className=" coolness-arithmetic">+</div>
            <div className=" coolness-criteria">share_rewards * 2</div>
            <div className=" coolness-arithmetic">+</div>
            <div className=" coolness-criteria">ambassador === 50</div>
            <div className=" coolness-arithmetic">+</div>
            <div className=" coolness-criteria">chat moderator === 40</div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }

  expand() {
    if (this.state.expanded) {
      this.setState({ expanded: false });
    } else {
      this.setState({ expanded: true });
    }
  }

  renderDesktop() {
    return (
      <div className="coolness">
        <span className="coolness-title">COOLNESS SCORE</span>
        <div className="coolness-section">
          <div className="coolness-criteria">appsLikes</div>
          <div className=" coolness-arithmetic">+</div>
          <div className=" coolness-criteria">apps.length * 10</div>
          <div className=" coolness-arithmetic">+</div>
          <div className=" coolness-criteria">delegate.donations_1</div>
          <div className=" coolness-arithmetic">+</div>
          <div className=" coolness-criteria">delegate.donations_2 * 5</div>
          <div className=" coolness-arithmetic">+</div>
          <div className=" coolness-criteria">delegate.donations_3 * 7</div>
        </div>
      </div>
    );
  }

  renderMobile() {
    return (
      <div className="coolness">
        <div className="coolness-menu">
          <span className="coolness-title">COOLNESS SCORE</span>
          <a onClick={() => this.expand()} className="arrow-down">
            {' '}
          </a>
        </div>
        {this.renderScore()}
      </div>
    );
  }

  render() {
    return (
      <div className="column">
        <MediaQuery maxDeviceWidth={1024}>{this.renderMobile()}</MediaQuery>
        <MediaQuery minDeviceWidth={1025}>{this.renderDesktop()}</MediaQuery>
      </div>
    );
  }
}

export default CoolnessScore;
