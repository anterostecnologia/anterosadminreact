import React, { Component } from 'react';
import lodash from 'lodash';


export default class AnterosCollapseContent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let className = "collapse";
        if (this.props.className){
            className += " "+this.props.className;
        }
       return (<div className="collapse" id={this.props.id} style={this.props.style}>
            {this.props.children}
        </div>);
    }

}