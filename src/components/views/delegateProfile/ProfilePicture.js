import React, { Component } from 'react';

class ProfilePicture extends Component {


    render() {
        return (
            <div className="image-wrap">
                <img alt="profilepicture" src={this.props.picture}/>
           </div>
        )
    }
}

export default ProfilePicture;
