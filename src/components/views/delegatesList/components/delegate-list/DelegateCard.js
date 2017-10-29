import React, { Component } from 'react';
import { goDelegateProfile } from '../../../../router/routes';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import ProfilePicture from "./ProfilePicture";
import Information from "./Information";

class DelegateCard extends Component {
    render() {
        const { delegate } = this.props;
        let image_url = delegate.img_url
            ? delegate.img_url
            : delegate.delegate_img_url ? delegate.delegate_img_url : '';
        return (
            <div className="column is-4">
              <a key={this.props.delegate.name} className="delegate-card"
                  onClick={() => this.props.goDelegateProfile(this.props.delegate.name)}
              >
                  <article className="media">
                    <div className="media-left">
                      <ProfilePicture url={image_url} />
                    </div>
                    <div className="media-content">
                        <Information delegate={delegate} />
                    </div>
                    <div className="media-right">{this.props.index}</div>
                  </article>
              </a>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            goDelegateProfile: name => push(goDelegateProfile + name),
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(DelegateCard);
