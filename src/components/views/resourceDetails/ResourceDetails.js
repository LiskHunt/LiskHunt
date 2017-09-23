import './resourceDetails.css';
import app_settings from '../../../config';

import React, { Component } from 'react';

import Slider from 'react-slick';
import Remarkable from 'remarkable';
import axios from 'axios';

import AnimationsWrapper from '../../animations-wrapper/AnimationsWrapper';
import { DiscussionEmbed } from '../../disqus/disqus';

import HighlightDetails from './components/HighlightDetails';

import { resources } from '../../../lib/resources/resources';
import descriptions from '../../../lib/resources/descriptions';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { goResourcesList } from '../../router/routes';
import { setActivePage } from "../../../actions";

class ResourceDetails extends Component {
  timeout = null;
  md = new Remarkable();

  constructor() {
    super();
    console.log('herro')
    this.state = {
      resource: {},
      description: '',
      votes: 0,
      views: 0,
      upVoted: false,
    };

  }

  componentWillMount(){
    this.props.setActivePage(goResourcesList)
  }

  componentDidMount() {
    this.getVotes();
    this.getViews();
    this.getResource();
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

    if(votes && votes.data && votes.data.votes){
      this.setState({
        votes: votes.data.votes || 0,
        upVoted: votes.data.upVoted,
      });
    }
  };

  getViews = async () => {
    let votes = await axios
      .get(
        `${app_settings.backend_url}/views/${this.props.match.params.app_id}`,
      )
      .catch(function(error) {
        console.error(error, 'error');
      });

    if(votes && votes.data && votes.data.views) {
      this.setState({views: votes.data.views || 0});
    }
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
        <div className="has-text-centered comments left20 right20">
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

        <section className="container hero carousel content bottom50">

          <HighlightDetails
            resource={resource}
            views={this.state.views}
            votes={this.state.votes}
            upVoted={this.state.upVoted}
            app_id={this.props.match.params.app_id}
            getVotes={this.getVotes}
          />

          <section className="section top0 padded-content">
            <div dangerouslySetInnerHTML={{ __html: this.state.description }} />
          </section>

          {this.renderDisqus(resource)}

        </section>

      </AnimationsWrapper>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
    setActivePage: (page) => setActivePage(page)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ResourceDetails);
