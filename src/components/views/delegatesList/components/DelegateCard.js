import React, { Component } from 'react';
import { Tooltip } from 'react-lightweight-tooltip';
import { goDelegateProfile } from '../../../router/routes';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';

class DelegateCard extends Component {
  render() {
    const tooltip = {
      content: {
        backgroundColor: '#303030',
        color: '#ffffff',
        background: '#303030',
      },
      tooltip: {
        color: '#303030',
        borderRadius: '10px',
        background: '#303030',
      },
    };

    return (
      <div
        key={this.props.delegate.name}
        className="column is-6 is-offset-3"
      >
        <a onClick={() => this.props.goDelegateProfile()}>
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={this.props.delegate.img_url} alt="resource_image" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{this.props.delegate.name}</strong> <br />
                    <Tooltip
                      content={[
                        ' The coolness score is calculated by the amount of Apps the delegate developed,',
                        <br />,
                        'the ammount of received likes and the amount of donations made. In this case:',
                        <br />,
                        <br />,
                        `Apps: ${this.props.delegate.app_count} || Likes: ${this
                          .props.delegate.likes}`,
                        <br />,
                        `Donations: ${this.props.delegate.total_donations}`,
                        <br />,
                      ]}
                      styles={tooltip}
                    >
                      <strong
                        data-tip
                        data-for="score-explain"
                        className="tooltip"
                        data-tooltip="Tooltip Text"
                        key={'tooltip' + this.props.delegate.name}
                      >
                        Coolness score:
                      </strong>{' '}
                      <small>{this.props.delegate.coolness_score}</small>
                    </Tooltip>
                  </p>
                </div>
                <nav className="level is-mobile">
                  <div className="level-left">
                    <a
                      className="level-item"
                      href={
                        'https://lisk.chat/direct/' +
                        this.props.delegate.contact
                      }
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="icon is-small">
                        <i className="fa  fa-commenting-o" />
                      </span>
                    </a>
                    <a
                      className="level-item"
                      href={this.props.delegate.github}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="icon is-small">
                        <i className="fa fa-github" />
                      </span>
                    </a>
                  </div>
                </nav>
              </div>
              <div className="media-right">{this.props.index}.</div>
            </article>
          </div>
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      goDelegateProfile: () => push(goDelegateProfile),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(DelegateCard);
