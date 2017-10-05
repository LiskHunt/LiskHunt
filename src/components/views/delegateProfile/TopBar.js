import React from 'react';
import TopBarText from "./TopBarText";
import TopBarButton from "./TopBarButton";


const TopBar = ({ coolnessScore , appCount, ranking }) => {
    return (
        <div className="column topbar">
            <div className="level">
                <TopBarText label="COOLNESS SCORE" text={coolnessScore} />
                <TopBarText label="APPLICATIONS" text={appCount} />
                <TopBarText label="RANKING" text={ranking} />
                <TopBarButton label="UPVOTE" text={1500} />
            </div>
        </div>
    );
};

export default TopBar;
