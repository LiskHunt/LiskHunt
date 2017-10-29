import React, {Component} from 'react';

import { connect } from 'react-redux';

import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';

class Description extends Component {
    render(){
        return (
            <div className="column">
                <h1>Delegates-hunt</h1>
                <div className="delegate-hunt--description">
                    The delegates bringing Lisk to the next level, sorted by coolness
                    score. A super-duper index to show how the delegate is contributing to
                    the Lisk ecosystem.
                </div >
                <div className="delegate-hunt--description">
                    The coolness score is calculated by adding the amount of Apps the delegate developed,
                    the amount of received likes and the amount of donations made.
                </div>
                <div className="delegates-participate">
                    <span>Are you a lisk delegate? </span>
                    <div className="participate">
                    <a onClick={() => this.props.goSubmitHunt()} className="underline">Join our list !</a>
                    </div>
                </div>

            </div>
        );
    }

};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            goSubmitHunt: () => push('/submit-hunt')
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Description);
