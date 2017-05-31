import React, { Component } from 'react';
import {buildClassNames} from "../utils/AnterosUtils";


export default class AnterosButtonGroup extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let className = buildClassNames("btn-group",(this.props.large?"btn-group-lg":""),(this.props.small?"btn-group-sm":""));
        return (<div className={className}>
            {this.props.children}
        </div>);
    }
}