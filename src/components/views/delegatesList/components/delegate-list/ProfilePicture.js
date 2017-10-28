import React from 'react';

const ProfilePicture = ({ url }) => {
    return (
        <div className="image">
            <img alt="how the person looks" src={url} />
        </div>
    );
};

export default ProfilePicture;
