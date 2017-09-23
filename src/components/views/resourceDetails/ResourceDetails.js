import './resourceDetails.css';

import React, { Component } from 'react';

import Slider from 'react-slick';

import AnimationsWrapper from '../../animations-wrapper/AnimationsWrapper';
import { DiscussionEmbed } from '../../disqus/disqus';

import HighlightDetails from './components/HighlightDetails';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goResourcesList } from '../../router/routes';
import { setActivePage } from '../../../actions';
import { getResource, getViews, getVotes } from '../../../actions/index';

class ResourceDetails extends Component {
  timeout = null;

  componentWillMount() {
    this.props.setActivePage(goResourcesList);
  }

  componentDidMount() {
    const app_id = this.props.match.params.app_id;
    this.props.getVotes(app_id);
    this.props.getViews(app_id);
    this.props.getResource(app_id);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  renderDisqus = resource => {
    if (resource.app_name) {
      const disqusShortname = 'liskhunt';
      const disqusConfig = {
        identifier: resource.app_id,
        url: 'https://liskhunt.com/resource/' + resource.app_id,
        title: resource.app_name,
      };
      return (
        <div className="has-text-centered comments left20 right20">
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
      );
    }
  };

  render() {
    let resource = this.props.resource;
    const settings = {
      dots: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 4500,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: resource.app_images && !!resource.app_images[1],
    };

    return (
      <AnimationsWrapper>
        <section className="section container hero carousel content">
          <Slider {...settings}>
            {this.props.resource.app_images &&
              this.props.resource.app_images.map(img => {
                return (
                  <div key={img}>
                    <img className="foo" src={img} alt="resource screenshot" />
                  </div>
                );
              })}
          </Slider>
        </section>

        <section className="container hero carousel content bottom50">
          <HighlightDetails
            resource={resource}
            views={this.props.views}
            votes={this.props.votes}
            upVoted={this.props.upVoted}
            app_id={this.props.match.params.app_id}
            getVotes={this.getVotes}
          />

          <section className="section top0 padded-content">
            <div dangerouslySetInnerHTML={{ __html: this.props.description }} />
          </section>

          {this.renderDisqus(resource)}
        </section>
      </AnimationsWrapper>
    );
  }
}

const mapStateToProps = state => ({
  state: state,
  resource: state.resource.resource,
  description: state.resource.description,
  votes: state.resource.votes,
  views: state.resource.views,
  upVoted: state.resource.upVoted,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setActivePage: page => setActivePage(page),
      getVotes: id => getVotes(id),
      getViews: id => getViews(id),
      getResource: id => getResource(id),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ResourceDetails);
