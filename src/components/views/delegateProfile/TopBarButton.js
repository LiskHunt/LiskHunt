import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { upVote } from '../../../actions';

class TopBarButton extends Component {

    handleUpvoteClick(){
        this.props.upVote(this.props.name)
    }

    render(){
        const { label, upvotes } = this.props;
        return (
            <div className="level-item topbar-button">
                <a onClick={() => this.handleUpvoteClick()}>
                    <div className="button-arrow-wrap">
                        <div className="arrow-up"></div>
                    </div>
                    <div className="topbar-button-label">{label}</div>
                    <div className="topbar-button-text">{upvotes}</div>
                </a>
            </div>
        );
    }

};


const mapStateToProps = state => ({
    upvotes : state.delegates.delegate.upvotes,
    name : state.delegates.delegate.name
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        upVote: (name) => upVote(name)
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TopBarButton);
