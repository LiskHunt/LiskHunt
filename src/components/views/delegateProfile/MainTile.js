import React from 'react';

import MainInformation from "./MainInformation";
import BannerWrap from "./BannerWrap";
import KeyInformation from "./KeyInformation";

const MainTile = ({ pictureUrl, name }) => {
    return (
        <div className="column is-one-quarter main-tile">
            <BannerWrap pictureUrl={pictureUrl}/>
            <KeyInformation name={name}/>
            <MainInformation/>
        </div>
    );
};

export default MainTile;
