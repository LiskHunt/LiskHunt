import React, { Component } from 'react';
import ContentLabel from "./ContentLabel";

class Resources extends Component {

    renderResources(){
        const {resources } = this.props;
        if (resources){
            return resources.map(e => {
                return (
                    <div className="resource-wrap">

                    </div>
                )
            });
        }else{
            return <div></div>
        }
    }

    renderContentLabel(){
        if (this.props.resources){
            return this.props.resources.length === 1 ? "1 RESOURCE" : `${this.props.resources.length} RESOURCES`
        }else{
            return "RESOURCES"
        }
    }

    render(){
        return (
            <div className="column is-two-thirds resources is-paddingless">
                <ContentLabel name={this.renderContentLabel()} />
                {this.renderResources()}

            </div>


        );
    }

};

export default Resources;
