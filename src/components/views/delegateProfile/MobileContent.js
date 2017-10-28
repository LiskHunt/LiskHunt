import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { Component } from 'react';
import Resources from './components/Resources';
import DonationBar from './components/DonationBar';
import BannerWrap from './components/BannerWrap';
import HeaderCard from './components/HeaderCard';
import Description from './components/Description';
import SocialBar from './components/SocialBar';

class MobileContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      information: true,
      resources: false,
      donations: false,
    };
  }

  handleClick(id) {
    if (id === 1) {
      if (this.state.information === false) {
        this.setState({
          resources: false,
          donations: false,
          information: true,
        });
      }
    }
    if (id === 2) {
      if (this.state.resources === false) {
        this.setState({
          resources: true,
          donations: false,
          information: false,
        });
      }
    }
    if (id === 3) {
      if (this.state.donations === false) {
        this.setState({
          resources: false,
          donations: true,
          information: false,
        });
      }
    }
  }

  getTabClass(value) {
    return value ? 'delegate-tab active-tab' : 'delegate-tab';
  }

  render() {
    return (
      <div className="delegate-content mobile-wrap">
        <BannerWrap />
        <HeaderCard />
        <SocialBar />

        <Tabs>
          <TabList className="delegate-tabs">
            <Tab
              className={this.getTabClass(this.state.information)}
              onClick={() => this.handleClick(1)}
            >
              Information
            </Tab>
            <Tab
              className={this.getTabClass(this.state.resources)}
              onClick={() => this.handleClick(2)}
            >
              Resources
            </Tab>
            <Tab
              className={this.getTabClass(this.state.donations)}
              onClick={() => this.handleClick(3)}
            >
              Donations
            </Tab>
          </TabList>
          <TabPanel>
            <Description />
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
