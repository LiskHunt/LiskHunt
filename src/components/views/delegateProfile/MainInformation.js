import React, {Component} from 'react';

import Column from "./Column"

class MainInformation extends Component {


    renderColumns(){
        const section1  = [{ label : "MAIN WALLET", text : "10,123 LSK"}, { label : "VOTING WALLET", text : "20,045 LSK"},
            { label : "SHARING REWARDS", text : "20%"}]
        const section2  = [{ label : "AFFILIATION", text : "--"}]
        const section3  = [{ label : "FORGING", text : "--"}, { label : "TOTAL FORGED", text : "--"}]
        const section4  = [{ label : "COMMITS TO LISKHQ", text : "--"}, { label : "MARKETING EVENTS", text : "--"},
            { label : "PUBLIC NODE", text : "--"}, { label : "SNAPSHOT SERVER", text : "--"}]

        return (
            <div>
                <Column fields={section1} />
                <Column fields={section2} />
                <Column fields={section3} />
                <Column fields={section4} />
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderColumns()}
            </div>

        );
    }
}

export default MainInformation;

