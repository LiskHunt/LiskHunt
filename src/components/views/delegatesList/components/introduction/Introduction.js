import React from 'react';
import Description from "./Description";
import CoolnessScore from "./CoolnessScore";

const Banner = () => {
    return (
        <div className="delegatelist--banner-wrap">
            <div className="delegatelist--banner columns">
                <Description />
                <CoolnessScore />
            </div>
        </div>
    );
};

export default Banner;
