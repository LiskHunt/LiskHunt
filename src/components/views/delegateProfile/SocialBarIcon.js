import React, {Component} from 'react';

class SocialBarIcon extends Component {

    renderIcon(){
        const { url, logo_available, logo_unavailable, label } = this.props;
        if (url){
            return (
                <a href={url} target="_blank" className="column">
                    <img src={logo_available} alt={label} className="image"></img>
                </a>

            )
        }else{
            return (
                <a className="column">
                        <img src={logo_unavailable} alt={label} className="image"></img>
                </a>
            )
        }
    }

    render(){
        return (
            <div className="column is-paddingless">
                {this.renderIcon()}
            </div>
        );
    }

};

export default SocialBarIcon;
