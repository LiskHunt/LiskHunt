import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import React, { Component } from 'react';
import Resources from "./Resources";
import DonationBar from "./DonationBar";
import BannerWrap from "./BannerWrap";
import HeaderCard from "./HeaderCard";
import Description from "./Description";
import SocialBar from "./SocialBar";

class MobileContent extends Component {
    constructor(props){
        super(props);
        this.state =  {
            information : true,
            resources : false,
            donations : false
        }
    }

    handleClick(id){
        if(id == 1){
            if (this.state.information === false){
                this.state.resources = false;
                this.state.donations = false;
                this.state.information = true;
            }

        }
        if(id == 2){
            if (this.state.resources === false){
                this.state.resources = true;
                this.state.donations = false;
                this.state.information = false;
            }

        }
        if(id == 3){
            if (this.state.donations === false){
                this.state.resources = false;
                this.state.donations = true;
                this.state.information = false;
            }

        }

    }

    getTabClass(value){
        return value ? "delegate-tab active-tab" : "delegate-tab";
    }

    render() {
        return (
            <div className="delegate-content mobile-wrap">
                <BannerWrap />
                <HeaderCard />
                <SocialBar />

                    <Tabs >
                        <TabList className="delegate-tabs">

                            <Tab className={ this.getTabClass(this.state.information) } onClick={() => this.handleClick(1)}>Information</Tab>
                            <Tab className={ this.getTabClass(this.state.resources) } onClick={() => this.handleClick(2)}>Resources</Tab>
                            <Tab className={ this.getTabClass(this.state.donations) } onClick={() => this.handleClick(3)}>Donations</Tab>
                        </TabList>
                        <TabPanel >
                            <Description/>

                        </TabPanel>
                        <TabPanel>
                            <Resources />
                        </TabPanel>

                        <TabPanel>
                            <DonationBar />
                        </TabPanel>

                    </Tabs>

            </div>
        );
    }
}
export default MobileContent;
