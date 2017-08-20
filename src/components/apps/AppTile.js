import React, { Component } from 'react';

class AppTile extends Component {
  constructor(props) {
    super(props);
  }

  labelClassName = (category) => {
    return `tag ${this.props.labels[category]}`
  };

  render() {
    return (
      <div
        key={this.props.app.app_id}
        className="column is-one-quarter has-text-centered"
      >
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={this.props.app.app_images} alt="App preview" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left" />
              <div className="media-content">
                <p className="title is-4 has-text-primary is-marginless">
                  {this.props.app.app_name}
                </p>
                <a
                  href={this.props.app.author_link}
                  target="_blank"
                  className="subtitle is-6 has-text-primary"
                  rel="noopener noreferrer"
                >
                  @{this.props.app.author}
                </a>
              </div>
              <div className="media-right">
                <span className={this.labelClassName(this.props.app.category)}>
                  #{this.props.app.category}
                </span>
              </div>
            </div>

            <div className="content">
              {this.props.app.short_description}
            </div>
          </div>
          <footer className="card-footer">
            <a className="card-footer-item is-dark">More info</a>
          </footer>
        </div>
      </div>
    );
  }
}

export default AppTile;
