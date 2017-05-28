import React, { Component } from 'react';


export default class AnterosCheckboxToggle extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = { checked: (this.props.checked ? true : false), disabled: (this.props.disabled ? true : false) }
    }

    componentWillReceiveProps(nextProps) {
        this.state = { checked: (nextProps.checked ? true : false), disabled: (nextProps.disabled ? true : false) }
    }

    onClick(event) {
        event.preventDefault();
        if (!this.state.disabled) {
            let checked = !this.state.checked;
            this.setState({ ...this.state, checked: checked })
            if (this.props.onCheckboxChange) {
                this.props.onCheckboxChange(this.props.value, checked);
            }
        }

    }

    render() {
        const { primary, success, info, danger, warning, large, extraLarge } = this.props;

        const className = `checkbox-toggle${(primary ? " toggle-primary" : "")}${(success ? " toggle-success" : "")}
        ${(info ? " toggle-info" : "")}${(danger ? " toggle-danger" : "")}${(warning ? " toggle-warning" : "")}
        ${(large ? " -large" : "")}${(extraLarge ? " -extra-large" : "")}`;

        return (<div className={className} onClick={this.onClick}>
            <input type="checkbox" checked={this.state.checked} disabled={this.state.disabled} onChange={this.onClick} />
            <label>{this.props.value}</label>
        </div>);
    }
}