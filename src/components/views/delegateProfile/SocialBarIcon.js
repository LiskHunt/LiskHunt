import React, {Component} from 'react';

class SocialBarIcon extends Component {

    renderIcon(){
        const { url, logo_available, logo_unavailable } = this.props;
        if (url){
            return (
                <a href={url} target="_blank" className="">
                    <img src={logo_available} className="image"></img>
                </a>

            )
        }else{
            return (
                <a className="">
                        <img src={logo_unavailable} className="image"></img>
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
