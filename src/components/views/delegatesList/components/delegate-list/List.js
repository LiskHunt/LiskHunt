import React, {Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DelegateCard from './DelegateCard';
import ContentLabel from "../../../../common/ContentLabel";

class List extends Component {

    renderDelegateList() {
        const { delegates } = this.props;

        if (delegates) {
            return this.props.delegates.map((delegate, index) => {
                return (
                    <DelegateCard
                        key={delegate.name}
                        delegate={delegate}
                        index={index + 1}
                    />
                );
            });
        }
    }

    renderContentLabel(){
        if (this.props.delegates) {
            return this.props.delegates.length === 1
                ? '1 DELEGATE'
                : `${this.props.delegates.length} DELEGATES`;
        } else {
            return 'DELEGATES';
        }
    }

    render(){
        return (
            <div className="delegates-list--content">
                <div className="list-label"><ContentLabel name={this.renderContentLabel()}/></div>
                <div className="columns list--wrap">
                    {this.renderDelegateList()}
                </div>

            </div>
        );
    }
};

const mapStateToProps = state => ({
    delegates: state.delegates.delegates,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(List);
