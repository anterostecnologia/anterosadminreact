import React, { Component } from 'react';

export default class AnterosLabel extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        let className = "label-custom";
        if (this.props.primary) {
            className += (this.props.outline ? " label-outline-primary" : " label-primary");
        } else if (this.props.success) {
            className += (this.props.outline ? " label-outline-success" : " label-success");
        } else if (this.props.info) {
            className += (this.props.outline ? " label-outline-info" : " label-info");
        } else if (this.props.warning) {
            className += (this.props.outline ? " label-outline-warning" : " label-warning");
        } else if (this.props.danger) {
            className += (this.props.outline ? " label-outline-danger" : " label-danger");
        } else if (this.props.dark) {
            className += (this.props.outline ? " label-outline-dark" : " label-dark");
        } else {
            className += (this.props.outline ? " label-outline-default" : " label-default");
        }
        if (this.props.pillFormat) {
            className += " label-pill";
        }



        return (<span className={className}>{this.props.caption}</span>);
    }
}

AnterosLabel.propTypes = {
    primary: React.PropTypes.bool,
    success: React.PropTypes.bool,
    info: React.PropTypes.bool,
    warning: React.PropTypes.bool,
    danger: React.PropTypes.bool,
    dark: React.PropTypes.bool,
    pillFormat: React.PropTypes.bool,
    outline: React.PropTypes.bool,
    caption: React.PropTypes.string,
};



