import React, { Component } from 'react';
import 'script-loader!jquery-asSpinner/dist/jquery-asSpinner.js'
import 'jquery-asSpinner/dist/css/asSpinner.css';
import lodash from "lodash";

export default class AnterosSpinner extends React.Component {
    constructor(props) {
        super(props);
        this.idSpinner = lodash.uniqueId("spinner");
        this.state = { value: this.props.value };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        let _this = this;
        $(this.input).asSpinner({
            disabled: _this.props.disabled,
            min: _this.props.min,
            max: _this.props.max,
            step: _this.props.step,
            precision: _this.props.precision,
            looping: _this.props.looping,
            namespace: 'anteros-spinner',
            mousewheel: _this.props.mouseWheel
        });

    }

    componentWillUnmount() {
        $(this.input).asSpinner('destroy');
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        if (this.props.onChange) {
            this.props.onChange(event);
        }
    }

    render() {
        let className = "";
        if (this.props.className) {
            className += " " + this.props.className;
        }
        if (this.props.id) {
            this.idSpinner = this.props.id;
        }
        return (
            <input maxLength={this.props.maxLenght}
                id={this.idSpinner}
                disabled={(this.props.disabled ? true : false)}
                style={{ ...this.props.style, width: this.props.width }}
                ref={ref => this.input = ref} type="text"
                value={this.state.value}
                className="form-control"
                onChange={this.handleChange}
            />
        );
    }
}


AnterosSpinner.propTypes = {
    value: React.PropTypes.string.isRequired,
    placeHolder: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number.isRequired,
    precision: React.PropTypes.number.isRequired,
    looping: React.PropTypes.bool.isRequired,
    mouseWheel: React.PropTypes.bool.isRequired
};

AnterosSpinner.defaultProps = {
    value: '',
    step: 1,
    precision: 0,
    looping: false,
    mouseWheel: false
}