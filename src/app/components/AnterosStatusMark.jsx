import React, { Component } from 'react';



export default class AnterosStatusMark extends Component {
    render() {
        let className = "status-mark topRight status-mark-border-default";
        // if (this.props.primary){
        //     className += " status-mark"+(this.props.onlyBorder?"-border":"")+"-primary";
        // } else if (this.props.success){
        //     className += " status-mark"+(this.props.onlyBorder?"-border":"")+"-success";
        // } else if (this.props.info){
        //     className += " status-mark"+(this.props.onlyBorder?"-border":"")+"-info";            
        // } else if (this.props.warning){
        //     className += " status-mark"+(this.props.onlyBorder?"-border":"")+"-warning";            
        // } else if (this.props.danger){
        //     className += " status-mark"+(this.props.onlyBorder?"-border":"")+"-danger";            
        // } else {
        //     className += " status-mark"+(this.props.onlyBorder?"-border":"")+"-default";
        // }
        if (this.props.pillFormat){
            className += " status-mark-pill";
        }

        let style = {};
        if (this.props.backgroundColor){
            style = {backgroundColor: this.props.backgroundColor};
        }
        if (this.props.color){
            style = {...style,color: this.props.color};
        }

        return (<span style={style} className={className}></span>);    
    }
}



AnterosStatusMark.propTypes = {
   primary: React.PropTypes.string,
   success: React.PropTypes.bool,
   info: React.PropTypes.bool,
   warning: React.PropTypes.bool,
   danger: React.PropTypes.bool,
   pillFormat: React.PropTypes.bool,
   backgroundColor: React.PropTypes.string,
   color: React.PropTypes.string,
   onlyBorder: React.PropTypes.bool.isRequired
}

AnterosStatusMark.defaultProps= {
   onlyBorder: false
}