import React, { Component } from 'react';

import { goResource } from '../../router/routes';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import './resourceTile.css'

class ResourceTile extends Component {
  labelClassName = category => {
    return `tag ${this.props.labels[category]}`;
  };

  render() {
    let app = this.props.app;
    return (
      <div key={app.app_id} className="column is-one-quarter has-text-centered">
        <div className="card">
          <div
            className="card-image pointer"
            onClick={() => this.props.goResource(app.resource_id)}
          >
            <figure className="image is-4by3">
              <img src={app.app_images[0]} alt="App preview" className="image-preview" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left" />
              <div className="media-content">
                <a
                  className="title is-4 has-text-primary is-marginless"
                  onClick={() => this.props.goResource(app.resource_id)}
                >
                  {app.name} <br />
                </a>
                <a
                  href={app.author_link}
                  target="_blank"
                  className="subtitle is-6 has-text-primary"
                  rel="noopener noreferrer"
                >
                  @{app.author}
                </a>
              </div>
              <div className="media-right">
                <span className={this.labelClassName(app.category)}>
                  #{app.category}
                </span>
              </div>
            </div>

            <div className="content">{app.short_description}</div>
          </div>
          <footer
            className="card-footer"
            onClick={() => this.props.goResource(app.resource_id)}
          >
            <a className="card-footer-item is-dark">More info</a>
          </footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      goResource: id => push(goResource + id),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ResourceTile);
