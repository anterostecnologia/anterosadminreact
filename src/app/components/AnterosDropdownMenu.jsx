import React, { Component } from 'react';



export default class AnterosDropdownMenu extends Component {
    render() {
        let className = "dropdown-menu";
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return (<div className={className}>
            {this.props.children}
        </div>);
    }
}



