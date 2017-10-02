import React from 'react';

import ProfilePicture from "./ProfilePicture"
import Banner from "./Banner"

const BannerWrap = ({ pictureUrl }) => {
    return (
        <section className="main-tile--banner-wrap">
            <Banner />
            <ProfilePicture picture={pictureUrl} />
        </section>
    );
};

export default BannerWrap;
