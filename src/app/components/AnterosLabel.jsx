import React, { Component } from 'react';



export default class AnterosLabel extends Component {
    render() {
        let className = "label-custom";
        if (this.props.primary){
            className += " label-primary";
        } else if (this.props.success){
            className += " label-success";
        } else if (this.props.info){
            className += " label-info";            
        } else if (this.props.warning){
            className += " label-warning";            
        } else if (this.props.danger){
            className += " label-danger";            
        } else {
            className += " label-default";
        }
        if (this.props.pillFormat){
            className += " label-pill";
        }

        return (<span className={className}>{this.props.caption}</span>);
    }
}



