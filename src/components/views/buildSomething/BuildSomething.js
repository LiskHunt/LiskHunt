import React, {Component} from 'react';
import AnimationsWrapper from '../../animations-wrapper/AnimationsWrapper'
import PropTypes from 'prop-types';
import { goResourcesList } from '../../router/router_helpers';


class BuildSomething extends Component {

  render() {

    return (
      <AnimationsWrapper>
        <div className="columns">
          <div className="container has-text-centered column is-half is-offset-one-quarter">
            <h1 className="title is-size-1">
              <span aria-label="nerd" role="img">
                🤓
              </span>{' '}
              Let's build something...
            </h1>
            <h2 className="subtitle">
              So you are a developer and you want to build something?
            </h2>
            <p>
              Lisk is a blockchain platform that provides decentralized blockchain apps. <br/>
              It's developed in Javascript and enables developers to create their own dApp (decentralized application) and run them on the Lisk sidechains.
              <br/><br/></p>
            <p>The sdk is annonced to be released before the end of 2017.<br/></p>
            <p>In the meanwhile you can still contribute to LiskHQ and build useful applications, tools to improve the network and the usability.<br/><br/>

              LiskHunt has the aim to collect all the resources, categorize and advertise.<br/>
              You can take inspiration on the <a onClick={goResourcesList.bind(this)} className="underlined">resources page</a>. Most of the projects are also open source, Lisk is open source, we <span aria-label="love" role="img">❤️</span> open source.
            </p>
            <h2 className="title is-size-2 top30">
              Join our developer community on <a href="https://lisk.builders" className="underlined" rel="noopener noreferrer" target="_blank">lisk.builders</a>
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
