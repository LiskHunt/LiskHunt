import React, { Component } from 'react';
import AnimationsWrapper from '../../animations-wrapper/AnimationsWrapper';
import PropTypes from 'prop-types';

class Cheers extends Component {
  render() {
    return (
      <AnimationsWrapper>
        <div className="">
          <div className="container has-text-centered">
            <h1 className="title is-size-1">
              <span aria-label="nerd" role="img">
                🎩
              </span>{' '}
              Cheers Mate!
            </h1>
          </div>
          <div className="container has-text-centered top20 bottom20">
            <p className="bottom20">
              <br />
              We are very excited to run LiskHunt a directory of Lisk related
              resources, apps, dapps & tools.
            </p>
            <p>
              If you are enjoying this tool, we would be very glad if you would
              like to donate to our App Development fund:
              <br />
              <strong>2247279626890654390L</strong>
            </p>
            <p>
              Carbonara is also looking for votes, if. you would like to keep
              the mood of carbonara high, feel free to vote him :)
            </p>

            <p className="top20">
              Created by{' '}
              <a
                href="https://github.com/xunga"
                rel="noopener noreferrer"
                target="_blank"
                className="link"
              >
                @Carbonara
              </a>.
            </p>
          </div>
        </div>
      </AnimationsWrapper>
    );
  }
}

export default Cheers;

Cheers.contextTypes = {
  router: PropTypes.object.isRequired,
};
