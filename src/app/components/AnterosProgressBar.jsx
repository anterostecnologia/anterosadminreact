import React, { Component } from 'react';
import { buildClassNames } from "../utils/AnterosUtils";

export default class AnterosProgressBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let className = buildClassNames("progress-bar",
            (this.props.success ? "bg-success" : ""),
            (this.props.info ? "bg-info" : ""),
            (this.props.warning ? "bg-warning" : ""),
            (this.props.primary ? "bg-primary" : ""),
            (this.props.danger ? "bg-danger" : ""),
            (this.props.striped ? "progress-bar-striped" : ""),
            (this.props.animated ? "progress-bar-animated" : "")
        );

        return (<div className="progress">
            <div className={className} role="progressbar" style={{ width: this.props.value + "%" }} aria-valuenow={this.props.value} aria-valuemin={this.props.min} aria-valuemax={this.props.max}>
                <span style={{verticalAlign: "middle"}}>{this.props.showText==true ? this.props.value + "%" : ""}</span>
            </div>
        </div>)
    }
}

AnterosProgressBar.propTypes = {
    success: React.PropTypes.bool,
    info: React.PropTypes.bool,
    warning: React.PropTypes.bool,
    primary: React.PropTypes.bool,
    danger: React.PropTypes.bool,
    striped: React.PropTypes.bool,
    animated: React.PropTypes.bool,
    showText: React.PropTypes.bool,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    value: React.PropTypes.number.isRequired
};

AnterosProgressBar.defaultProps = {
    showText: false,
    min: 0,
    max: 100,
    value: 0
}