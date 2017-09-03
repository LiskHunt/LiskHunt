import './resourceDetails.css';
import app_settings from '../../../config';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Remarkable from 'remarkable';
import axios from 'axios';

import AnimationsWrapper from '../../animations-wrapper/AnimationsWrapper';
import { DiscussionEmbed } from '../../disqus/index';

import HighlightDetails from './components/HighlightDetails';

import { resources } from '../../../lib/resources/resources';
import descriptions from '../../../lib/resources/descriptions';

class ResourceDetails extends Component {
  timeout = null;
  md = new Remarkable();

  constructor() {
    super();

    this.state = {
      resource: {},
      description: '',
      votes: 0,
      views: 0,
      upVoted: false,
    };
  }

  componentDidMount() {
    this.getResource();
    this.getVotes();
    this.getViews();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  getResource = () => {
    const resource = resources.find(res => {
      return res.app_id === this.props.match.params.app_id;
    });
    const description = this.md.render(descriptions[resource.app_id]);
    this.setState({
      resource,
      description,
    });
  };

  getVotes = async () => {
    let votes = await axios
      .get(`${app_settings.backend_url}/vote/${this.props.match.params.app_id}`)
      .catch(function(error) {
        console.error(error, 'error');
      });

    this.setState({
      votes: votes.data.votes || 0,
      upVoted: votes.data.upVoted,
    });
  };

  getViews = async () => {
    let votes = await axios
      .get(
        `${app_settings.backend_url}/views/${this.props.match.params.app_id}`,
      )
      .catch(function(error) {
        console.error(error, 'error');
      });

    this.setState({ views: votes.data.views || 0 });
  };

  renderDisqus = resource => {

    if (resource.app_name) {
      const disqusShortname = 'liskhunt';
      const disqusConfig = {
        identifier: resource.app_id,
        url: 'https://liskhunt.com/resource/' + resource.app_id,
        title: resource.app_name,
      };
      return (
        <div className="container has-text-centered comments">
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>
        </div>
      )

    }

  };

  render() {
    let resource = this.state.resource;
    const settings = {
      dots: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 4500,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: (resource.app_images && !!resource.app_images[1]),
    };

    return (
      <AnimationsWrapper>
        <section className="section container hero carousel content">
          <Slider {...settings}>
            {this.state.resource.app_images &&
              this.state.resource.app_images.map(img => {
                return (
                  <div key={img}>
                    <img className="foo" src={img} alt="resource screenshot" />
                  </div>
                );
              })}
          </Slider>
        </section>

        <HighlightDetails
          resource={resource}
          views={this.state.views}
          votes={this.state.votes}
          upVoted={this.state.upVoted}
          app_id={this.props.match.params.app_id}
          getVotes={this.getVotes}
        />

        <section className="section container hero top0 padded-content ">
          <div dangerouslySetInnerHTML={{ __html: this.state.description }} />
        </section>

        {this.renderDisqus(resource)}
      </AnimationsWrapper>
    );
  }
}

ResourceDetails.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default ResourceDetails;
