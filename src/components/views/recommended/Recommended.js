import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

import ResourceTile from './ResourceTile';
import AnimationsWrapper from '../../animations-wrapper/AnimationsWrapper';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goResourcesList } from '../../router/routes';
import {
  setActivePage,
  sortResources,
  filterResources,
  setSortBy,
  setFilterBy,
  getResources,
} from '../../../actions';

class Recommended extends Component {
  componentWillMount() {
    this.props.setActivePage(goResourcesList);
      this.props.getResources();
  }

    componentDidUpdate() {
        if (this.props.resources.length > 0){
            this.sortBy('Magic')
        }
    }

  sortBy = sortBy => {
    if (this.props.sortBy === sortBy) {
      return;
    }
    this.props.setSortBy(sortBy);
    this.props.sortResources(this.props.resources, sortBy);
  };

  filterBy = filter => {
    this.props.setFilterBy(filter);
    this.props.filterResources(filter);
  };

  render() {
    return (
      <AnimationsWrapper>
        <section className="top15">
          <div className="padded-content has-text-centered">
            <section className="container">
              <section className="columns">
                <div className="container has-text-centered bottom30">
                  <div className="column is-12">
                    <h1 className="is-title is-size-1">
                      Recommended Resources
                    </h1>
                    <div className="">
                      Sort by
                      <div className="dropdown is-hoverable hover-dropdown">
                        <div className="dropdown-trigger">
                          <button
                            className="button is-info hover-dropdown"
                            aria-haspopup="true"
                            aria-controls="dropdown-menu4"
                          >
                            <span>{this.props.sortBy}</span>
                            <span className="icon is-small">
                              <i
                                className="fa fa-angle-down"
                                aria-hidden="true"
                              />
                            </span>
                          </button>
                        </div>
                        <div
                          className="dropdown-menu"
                          id="dropdown-menu4"
                          role="menu"
                        >
                          <div className="dropdown-content">
                            <a
                              onClick={() => this.sortBy('Magic')}
                              className="dropdown-item has-text-dark has-text-left"
                            >
                              Magic
                            </a>
                            <a
                              onClick={() => this.sortBy('Newest')}
                              className="dropdown-item has-text-dark has-text-left"
                            >
                              Newest Hunt
                            </a>
                          </div>
                        </div>
                      </div>
                      and filter by
                      <div className="dropdown is-hoverable hover-dropdown">
                        <div className="dropdown-trigger">
                          <button
                            className="button is-info hover-dropdown"
                            aria-haspopup="true"
                            aria-controls="dropdown-menu4"
                          >
                            <span>{this.props.filterBy}</span>
                            <span className="icon is-small">
                              <i
                                className="fa fa-angle-down"
                                aria-hidden="true"
                              />
                            </span>
                          </button>
                        </div>
                        <div
                          className="dropdown-menu"
                          id="dropdown-menu4"
                          role="menu"
                        >
                          <div className="dropdown-content">
                            <a
                              onClick={() => this.filterBy('None')}
                              className="dropdown-item has-text-dark has-text-left"
                            >
                              None
                            </a>
                            {Object.keys(this.props.labels).map(key => {
                              return (
                                <a
                                  key={key}
                                  onClick={() => this.filterBy(key)}
                                  className="dropdown-item has-text-dark has-text-left"
                                >
                                  {key}
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <FlipMove
                staggerDelayBy={150}
                appearAnimation="accordionVertical"
                enterAnimation="fade"
                leaveAnimation="fade"
                className="columns is-multiline"
              >
                {this.props.resources.map(app => {
                  return (
                    <ResourceTile
                      app={app}
                      labels={this.props.labels}
                      key={app.resource_id}
                    />
                  );
                })}
              </FlipMove>
            </section>
          </div>
        </section>
      </AnimationsWrapper>
    );
  }
}

const mapStateToProps = state => ({
  resources: state.resources.resources,
  labels: state.resources.labels,
  sortBy: state.resources.sortBy,
  filterBy: state.resources.filterBy,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setActivePage: page => setActivePage(page),
      sortResources: (resources, type) => sortResources(resources, type),
      filterResources: filter => filterResources(filter),
      getResources: () => getResources(),
      setSortBy: sortBy => setSortBy(sortBy),
      setFilterBy: filterBy => setFilterBy(filterBy),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Recommended);
