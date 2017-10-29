import React from 'react';
import ReactImageFallback from "react-image-fallback";

const ProfilePicture = ({ url }) => {
    return (
        <div className="image delegatecard-image">
            <ReactImageFallback
                src={url}
                fallbackImage="https://dummyimage.com/50x50/aaaaaa/aaaaaa.png"
                alt="cool image should be here"
                className="profile-picture" />
        </div>
    );
};

export default ProfilePicture;
