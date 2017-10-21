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
    const { delegate } = this.props;

    let image_url = delegate.img_url ? delegate.img_url : delegate.delegate_img_url ? delegate.delegate_img_url : ""
    return (
      <div
        key={this.props.delegate.name}
        className="column is-6 is-offset-3"
      >
        <a onClick={() => this.props.goDelegateProfile(this.props.delegate.name)}>
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={image_url} alt="resource_image" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <div>
                    <strong>{this.props.delegate.name}</strong> <br />
                    <Tooltip
                      content={[
                        ' The coolness score is calculated by the amount of Apps the delegate developed,\n',
                        'the ammount of received likes and the amount of donations made. In this case:\n',

                        `Apps: ${this.props.delegate.app_count} || Likes: ${this
                          .props.delegate.likes}`,

                        `\nDonations: ${this.props.delegate.total_donations}`,

                      ]}
                      styles={tooltip}
                      key={this.props.delegate.name}
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
                  </div>
                </div>
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
      goDelegateProfile: (name) => push(goDelegateProfile + name),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(DelegateCard);
