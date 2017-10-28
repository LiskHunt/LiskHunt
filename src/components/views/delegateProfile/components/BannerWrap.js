import React from 'react';

import ProfilePicture from './ProfilePicture';
import Banner from './Banner';

const BannerWrap = ({ pictureUrl }) => {
  return (
    <section className="sidebar--banner-wrap">
      <Banner />
      <ProfilePicture picture={pictureUrl} />
    </section>
  );
};

export default BannerWrap;
