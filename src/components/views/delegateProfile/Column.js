import React, {Component} from 'react';

import TextWrap from "./TextWrap"

class Column extends Component {


    renderColumn(fields){
        return fields.map(obj =>{

            return <TextWrap key={obj.label} label={obj.label} text={obj.text} />
        });
    }

    render() {
        const fields = this.props.fields;
        return (
            <section className="column padded-content ">
                {this.renderColumn(fields)}
            </section>
        );
    }
}

export default Column;

