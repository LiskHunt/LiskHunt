import React from 'react';

import Description from "./Description";
import BannerWrap from "./BannerWrap";
import HeaderCard from "./HeaderCard";

const Sidebar = ({ }) => {
    return (
        <div id="sidebar" className="column is-one-quarter">
            <BannerWrap />
            <HeaderCard />
            <Description/>
        </div>
    );
};

export default Sidebar;
