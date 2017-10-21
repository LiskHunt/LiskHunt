import React, { Component } from 'react';
import Resources from './Resources';
import RightBar from './RightBar';

class Content extends Component {
  render() {
    return (
      <div className="content-wrap columns">
        <Resources />
        <RightBar />
      </div>
    );
  }
}

export default Content;
