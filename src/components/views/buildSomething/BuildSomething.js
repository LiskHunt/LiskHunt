import React, {Component} from 'react';
import AnimationsWrapper from '../../animations-wrapper/AnimationsWrapper'
import PropTypes from 'prop-types';

class BuildSomething extends Component {

  render() {

    return (
      <AnimationsWrapper>
        <div className="">
          <div className="container has-text-centered">
            <h1 className="title is-size-1">
              <span aria-label="nerd" role="img">
                🤓
              </span>{' '}
              Todo:
            </h1>
            <h2 className="subtitle">
              So you are a developer and you want to build something?
            </h2>
          </div>
        </div>
      </AnimationsWrapper>
    );

  }
};

export default BuildSomething;

BuildSomething.contextTypes = {
  router: PropTypes.object.isRequired,
};
