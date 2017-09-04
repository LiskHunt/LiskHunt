import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { goResource } from '../../router/router_helpers';

class ResourceTile extends Component {
  constructor(props) {
    super(props);
  }

  labelClassName = category => {
    return `tag ${this.props.labels[category]}`;
  };

  render() {
    let app = this.props.app;
    return (
      <div key={app.app_id} className="column is-one-quarter has-text-centered">
        <div className="card">
          <div className="card-image pointer" onClick={goResource.bind(this, app.app_id)}>
            <figure className="image is-4by3">
              <img src={app.app_images[0]} alt="App preview" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left" />
              <div className="media-content">
                <a
                  className="title is-4 has-text-primary is-marginless"
                  onClick={goResource.bind(this, app.app_id)}
                >
                  {app.app_name} <br />
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

            <div className="content">
              {app.short_description}
            </div>
          </div>
          <footer
            className="card-footer"
            onClick={goResource.bind(this, app.app_id)}
          >
            <a className="card-footer-item is-dark">More info</a>
          </footer>
        </div>
      </div>
    );
  }
}

ResourceTile.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default ResourceTile;
