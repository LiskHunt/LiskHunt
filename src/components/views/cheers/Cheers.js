import React, { Component } from 'react';
import AnimationsWrapper from '../../animations-wrapper/AnimationsWrapper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goCheers } from '../../router/routes';
import { setActivePage } from '../../../actions';

class Cheers extends Component {
  componentWillMount() {
    this.props.setActivePage(goCheers);
  }

  render() {
    return (
      <AnimationsWrapper>
        <div className="container has-text-centered column is-half is-offset-one-quarter">
          <div className="has-text-centered">
            <h1 className="title is-size-1">
              <span aria-label="nerd" role="img">
                🎩
              </span>
              <br className="is-hidden-desktop" /> Cheers Mate!
            </h1>
          </div>
          <div className="has-text-centered top20 bottom20">
            <p className="bottom20">
              <br />
              We are very excited to run LiskHunt a directory of Lisk related
              resources, apps, dapps & tools.
            </p>
            <div>
              If you are enjoying this tool, we would be very glad if you would
              like to donate to our App Development fund:
              <br />
              <strong>2247279626890654390L</strong>
              <p>
                Carbonara is also looking for votes, if you would like to keep
                the mood of carbonara high, feel free to vote him :)
              </p>
            </div>

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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setActivePage: page => setActivePage(page),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Cheers);
