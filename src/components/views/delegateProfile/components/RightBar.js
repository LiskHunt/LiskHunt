import React from 'react';
import SocialBar from './SocialBar';
import DonationBar from './DonationBar';

const RightBar = ({ social, donations }) => {
  return (
    <div className="right-bar column">
      <SocialBar social={social} />
      <DonationBar donations={donations} />
    </div>
  );
};

export default RightBar;
