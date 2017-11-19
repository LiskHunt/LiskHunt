import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setActiveResponsiveMenu } from '../../../actions';

class HamburgerIcon extends Component {

    hamburgerClick(){
        this.props.setActiveResponsiveMenu(!this.props.active_responsive_menu);
    }

    insertClassOnActiveMenu() {
        return this.props.active_responsive_menu ? ' is-active' : '';
    }

    render(){
        return (
            <div onClick={() => this.hamburgerClick()}
                className={ "navbar-burger burger " + this.insertClassOnActiveMenu() }  data-target="navMenubd-example">
                <span />
                <span />
                <span />
            </div>
        );
    }

};


const mapStateToProps = state => ({
    active_responsive_menu: state.navigation.active_responsive_menu
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            setActiveResponsiveMenu: (active) => setActiveResponsiveMenu(active)
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerIcon);
