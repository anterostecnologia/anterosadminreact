import React, { Component } from 'react';
import lodash from "lodash";

export default class AnterosPassword extends React.Component {
    constructor(props) {
        super(props);
        this.idPassword = lodash.uniqueId("password");
        this.state = { value: this.props.value, reveal: this.props.reveal };
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckChange = this.handleCheckChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        if (this.props.onChange) {
            this.props.onChange(event);
        }
    }

    handleCheckChange(event) {
        this.setState({ reveal: !this.state.reveal })
    }

    render() {
        let className = "";
        if (this.props.className) {
            className += " " + this.props.className;
        }
        if (this.props.id) {
            this.idPassword = this.props.id;
        }
        return (
            <div className="input-group"  style={{width: this.props.width }}>
                <input data-toggle="password"
                    id={this.idPassword}
                    data-placement="before"
                    className="form-control"
                    type={this.state.reveal ? 'text' : 'password'}
                    disabled={(this.props.disabled ? true : false)}
                    style={{ ...this.props.style}}
                    maxLength={this.props.maxLenght}
                    value={this.state.value}
                    placeholder={this.props.placeHolder}
                    onChange={this.handleChange}
                />
                <div id="showPassword" className="input-group-addon" onClick={this.handleCheckChange.bind(this)}>
                    <i className={this.state.checked ? 'fa fa-eye-slash' : 'fa fa-eye'}></i>
                </div>
            </div>
        );
    }
}


AnterosPassword.propTypes = {
    value: React.PropTypes.string.isRequired,
    placeHolder: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    maxLenght: React.PropTypes.number.isRequired,
    reveal: React.PropTypes.bool.isRequired
};

AnterosPassword.defaultProps = {
    value: '',
    placeHolder: 'senha',
    maxLenght: 0,
    reveal: false
}