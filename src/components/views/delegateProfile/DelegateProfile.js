import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchProfile } from '../../../actions';
import { goDelegateProfile } from '../../router/routes';
import { setActivePage } from '../../../actions';
import { bindActionCreators } from 'redux';

import "./profile.css"

import Sidebar from "./Sidebar";
import TopBar from "./TopBar";


class DelegatesProfile extends Component {

    constructor(props){
        super(props);
        const { name }  = this.props.match.params
        this.props.fetchProfile(name);
    }

    componentWillMount() {
        this.props.setActivePage(goDelegateProfile);
    }

    renderProfile(delegate) {
        const {applications_count, coolness_score, ranking, delegate_img_url, delegate_name } = delegate
        return (
            <div className="hero padded-content is-fullheight delegate-content">
                <div className="container">
                    <div className="columns">
                        <Sidebar pictureUrl={delegate_img_url} name={delegate_name}/>
                        <TopBar appCount={applications_count} coolnessScore={coolness_score} ranking={ranking} />


                    </div>
                </div>
            </div>
        );
    }

    render() {
        const { delegate } = this.props;
        return <div>{this.renderProfile(delegate)}</div>;
    }

}

const mapStateToProps = state => ({
    delegate: state.delegates.delegate
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            fetchProfile,
            setActivePage: page => setActivePage(page),
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(DelegatesProfile);
