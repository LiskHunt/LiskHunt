import React, {Component} from 'react';

class MenuItem extends Component {

    isActivePage(page) {
        return this.props.active_page === page ? 'is-active' : '';
    }

    renderLabel(label, emoticon){
        if (emoticon){
            return `${label} ${emoticon}`
        }else{
            return label;
        }
    }

    render(){
        const { goToPage, route, label, emoticon } = this.props;
        return (
            <a
                className={'navbar-item has-text-grey-lighter ' + this.isActivePage(route)}
                onClick={() => goToPage()}>
                {this.renderLabel(label, emoticon)}
            </a>
        );
    }

};

export default MenuItem;
