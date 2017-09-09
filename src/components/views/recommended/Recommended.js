import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

import ResourceTile from './ResourceTile';
import AnimationsWrapper from '../../animations-wrapper/AnimationsWrapper';

import { resources, labels } from '../../../lib/resources/resources';

class Recommended extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: [],
      sortBy: 'Magic',
      filterBy: 'None',
    };
  }

  componentWillMount() {
    this.setState({
      resources: this.shuffleArray(resources),
    });
  }

  shuffleArray = arrayToShuffle => {
    let arrayCopy = arrayToShuffle.slice(0);
    return arrayCopy.sort(() => {
      return Math.random() - 0.1;
    });
  };

  changeSortBy = sortBy => {
    if (this.state.sortBy === sortBy) {
      return;
    }

    switch (sortBy) {
      case 'Magic': {
        return this.setState({
          resources: this.shuffleArray(this.state.resources),
          sortBy,
        });
      }
      case 'Newest': {
        return this.setState({
          resources: this.state.resources.slice(0).reverse(),
          sortBy,
        });
      }
      default: {
        return;
      }
    }
  };

  changeFilterBy = filterBy => {
    let resourcesFiltered = resources.filter(res => res.category === filterBy);

    if (filterBy === 'None') resourcesFiltered = resources.slice(0);

    this.setState({
      resources: resourcesFiltered,
      filterBy,
    });
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
                            <span>
                              {this.state.sortBy}
                            </span>
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
                              onClick={() => this.changeSortBy('Magic')}
                              className="dropdown-item has-text-dark has-text-left"
                            >
                              Magic
                            </a>
                            <a
                              onClick={() => this.changeSortBy('Newest')}
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
                            <span>
                              {this.state.filterBy}
                            </span>
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
                              onClick={() => this.changeFilterBy('None')}
                              className="dropdown-item has-text-dark has-text-left"
                            >
                              None
                            </a>
                            {Object.keys(labels).map(key => {
                              return (
                                <a
                                  key={key}
                                  onClick={() => this.changeFilterBy(key)}
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
                {this.state.resources.map(app => {
                  return (
                    <ResourceTile app={app} labels={labels} key={app.app_id} />
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

export default Recommended;
