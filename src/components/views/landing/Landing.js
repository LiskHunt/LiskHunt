import React,{Component} from 'react';

import AnimationsWrapper from '../../animations-wrapper/AnimationsWrapper'
import {goResourcesList, goBuildSomething, goNewToLisk, goHome} from '../../router/routes';

import { connect } from "react-redux";
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'

import { setActivePage } from "../../../actions"

class Landing extends Component{

    componentWillMount(){
        this.props.setActivePage(goHome)
    }

  render(){
    return(
      <AnimationsWrapper>
        <div className="container has-text-centered padded-content">
          <h1 className="title is-size-1">
            <span aria-label="rollecoaster" role="img">🎢</span><br className="is-hidden-desktop"/> Hand picked top projects for Lisk
          </h1>
          <h2 className="subtitle">
            A directory of the best Lisk resources.
          </h2>
          <div className="has-text-left inline-block">
            <p><span role="img" aria-label="wave">👋🏻</span> New to Lisk? <a className="underlined" onClick={() => this.props.goNewToLisk()}>Start here → </a></p>
            <p><span role="img" aria-label="wave">🔎</span> Looking to browse resources? <a className="underlined" onClick={() => this.props.goResourcesList()}>here →</a></p>
            <p><span role="img" aria-label="wave">🤓</span> Are you a developer? <a className="underlined" onClick={() => this.props.goBuildSomething()}>Let's create stuff → </a></p>

          </div>
        </div>
      </AnimationsWrapper>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
    goNewToLisk: () => push(goNewToLisk),
    goResourcesList: () => push(goResourcesList),
    goBuildSomething: () => push(goBuildSomething),
    setActivePage : (page) => setActivePage(page)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
