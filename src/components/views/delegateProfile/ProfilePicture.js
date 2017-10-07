import React, { Component } from 'react';

class ProfilePicture extends Component {


    render() {
        return (
            <div className="image-wrap">
                <img alt="profile-picture" src={this.props.picture}/>
           </div>
        )
    }
}

export default ProfilePicture;
