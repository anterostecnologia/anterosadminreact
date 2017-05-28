import React, { Component } from 'react';



export default class AnterosBadge extends Component {
    render() {
        let className = "badge-custom";
        if (this.props.primary){
            className += " badge-primary";
        } else if (this.props.success){
            className += " badge-success";
        } else if (this.props.info){
            className += " badge-info";            
        } else if (this.props.warning){
            className += " badge-warning";            
        } else if (this.props.danger){
            className += " badge-danger";            
        } else {
            className += " badge-default";
        }
        if (this.props.pillFormat){
            className += " badge-pill";
        }

        return (<span className={className}>{this.props.caption}</span>);    
    }
}



