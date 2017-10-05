import React from 'react';

import Description from "./Description";
import BannerWrap from "./BannerWrap";
import HeaderCard from "./HeaderCard";

const Sidebar = ({ pictureUrl, name }) => {
    return (
        <div className="column is-one-quarter sidebar">
            <BannerWrap pictureUrl={pictureUrl}/>
            <HeaderCard name={name}/>
            <Description/>
        </div>
    );
};

export default Sidebar;
