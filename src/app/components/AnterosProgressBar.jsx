import React, { Component } from 'react';



export default class AnterosProgressBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let className = "progress-bar";
        if (this.props.success) {
            className += " bg-success"
        }
        if (this.props.info) {
            className += " bg-info"
        }
        if (this.props.warning) {
            className += " bg-warning"
        }
        if (this.props.primary) {
            className += " bg-primary"
        }
        if (this.props.danger) {
            className += " bg-danger"
        }
        if (this.props.striped) {
            className += " progress-bar-striped";
        }

        if (this.props.animated) {
            className += " progress-bar-animated"
        }

        return (<div className="progress">
            <div className={className} role="progressbar" style={{ width: this.props.value + "%" }} aria-valuenow={this.props.value} aria-valuemin={this.props.min} aria-valuemax={this.props.max}></div>
        </div>)
    }
}

