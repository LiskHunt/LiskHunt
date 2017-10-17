import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import React, { Component } from 'react';
import Resources from "./Resources";
import Sidebar from "./Sidebar";
import BannerWrap from "./BannerWrap";
import HeaderCard from "./HeaderCard";

class MobileContent extends Component {
    constructor(props){
        super(props);
        this.state =  {
            information : true,
            resources : false
        }
    }

    handleClick(id){
        if(id == 1){
            if (this.state.information === false){
                this.state.resources = false;
                this.state.information = true;
            }

        }
        if(id == 2){
            if (this.state.resources === false){
                this.state.resources = true;
                this.state.information = false;
            }

        }

    }

    getTabClass(value){
        return value ? "delegate-tab active-tab" : "delegate-tab";
    }

    render() {
        return (
            <div id="delegate-content" className="mobile-wrap">
                <BannerWrap pictureUrl={""}/>
                <HeaderCard name={"Liskit"}/>

                    <Tabs >
                        <TabList className="delegate-tabs">

                            <Tab className={ this.getTabClass(this.state.information) } onClick={() => this.handleClick(1)}>Information</Tab>
                            <Tab className={ this.getTabClass(this.state.resources) } onClick={() => this.handleClick(2)}>Resources</Tab>

                        </TabList>
                        <TabPanel >


                        </TabPanel>
                        <TabPanel>
                            <Resources resources={[]} />
                        </TabPanel>

                    </Tabs>

            </div>
        );
    }
}
export default MobileContent;
