import React from 'react';
import SocialBar from "./SocialBar";
import DonationBar from "./DonationBar";

const RightBar = ({ social }) => {
    return (
        <div className="right-bar column">
            <SocialBar social={social}/>
            <DonationBar />
        </div>
    );
};

export default RightBar;
