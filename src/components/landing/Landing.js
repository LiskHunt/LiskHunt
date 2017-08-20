import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { goResourcesList, goBuildSomething } from '../router/router_helpers';

class Landing extends Component{

  goNew = () => {
    this.context.router.history.push('/');
  };

  render(){
    return(
      <div className="">
        <div className="container has-text-centered">
          <h1 className="title is-size-1">
            <span aria-label="rollecoaster" role="img">🎢</span> Hand picked top projects for Lisk
          </h1>
          <h2 className="subtitle">
            A directory of the best Lisk resources.
          </h2>
          <div className="has-text-left inline-block">
            <p><span role="img" aria-label="wave">👋🏻</span> New to Lisk? <a className="underlined" onClick={this.goNew}>Start here → </a></p>
            <p><span role="img" aria-label="wave">🔎</span> Looking to browse resources? <a className="underlined" onClick={goResourcesList.bind(this)}>here →</a></p>
            <p><span role="img" aria-label="wave">🤓</span> Are you a developer? <a className="underlined" onClick={goBuildSomething.bind(this)}>Let's create stuff → </a></p>

          </div>
        </div>
      </div>
    );
  }
}

Landing.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default Landing;
