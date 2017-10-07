import React, {Component} from 'react';

import { goResource } from '../../router/routes';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';

class Resource extends Component {

    render(){
        const {name, category, description, app_images, resource_id } = this.props.resource
        const image = app_images[0] ? app_images[0] : "https://dummyimage.com/200x200/cccccc/cccccc";

        return (
            <a onClick={() => this.props.goResource(resource_id)} className="resource-wrap">
                <div className="resource-left-section">
                    <img src={image} className="image resource-image"/>
                </div>
                <div className="resource-right-section-wrap">
                    <div className="resource-section-wrap">
                        <div className="resource-name">{name}</div>
                        <div className="resource-category">{category}</div>
                    </div>
                    <div className="resource-description">{description}</div>
                    <div className="resource-right-section-details" ><a onClick={() => this.props.goResource(resource_id)}>Go to details</a></div>
                </div>
            </a>
        );
    }

};



const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            goResource: id => push(goResource +id),
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Resource);

