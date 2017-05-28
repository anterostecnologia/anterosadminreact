import React, { Component } from 'react';
import 'script-loader!jquery-maskmoney/dist/jquery.maskMoney.js'
import lodash from "lodash";

export default class AnterosNumber extends React.Component {
    constructor(props) {
        super(props);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.idNumber = lodash.uniqueId("number");
        this.state = { value: this.props.value };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        let _this = this;
        $(this.input).maskMoney({
            prefix: _this.props.prefix,
            suffix: _this.props.suffix,
            affixesStay: _this.props.affixesStay,
            thousands: _this.props.thousandsSeparator,
            decimal: _this.props.decimalSeparator,
            precision: _this.props.precision,
            allowZero: _this.props.allowZero,
            allowNegative: _this.props.allowNegative,
            format: this.props.format
        });

        $(this.input).maskMoney('mask', this.props.mask);
    }

    componentWillUnmount() {
        $(this.input).maskMoney('destroy');
    }

    onKeyPress(event) {
        console.log(event.keyCode);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        if (this.props.onChange) {
            this.props.onChange(event);
        }
    }

    render() {
        if (this.props.id) {
            this.idNumber = this.props.id;
        }
        return (
            <input disabled={(this.props.disabled ? true : false)} style={{ textAlign: "right" }} className={this.props.className} id={this.idNumber} ref={ref => this.input = ref} type="text" value={this.state.value} onChange={this.handleChange} />
        );
    }
}


AnterosNumber.propTypes = {
    prefix: React.PropTypes.string,
    suffix: React.PropTypes.string,
    affixesStay: React.PropTypes.bool.isRequired,
    thousandsSeparator: React.PropTypes.string.isRequired,
    decimalSeparator: React.PropTypes.string.isRequired,
    precision: React.PropTypes.number.isRequired,
    allowZero: React.PropTypes.bool.isRequired,
    allowNegative: React.PropTypes.bool.isRequired,
    mask: React.PropTypes.string,
    value: React.PropTypes.string.isRequired,
    disabled: React.PropTypes.bool
};

AnterosNumber.defaultProps = {
    affixesStay: true,
    thousandsSeparator: '.',
    decimalSeparator: ',',
    precision: 2,
    allowZero: false,
    allowNegative: true,
    value: '0'
}