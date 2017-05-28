import React, { Component } from 'react';
import 'script-loader!bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js'
import 'bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css';
import lodash from "lodash";

export default class AnterosColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.idColorPicker = lodash.uniqueId("colorPicker");
        this.state = { value: this.props.value };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        let _this = this;
        $(this.divInput).colorpicker({
            format: _this.props.format
        });
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        let className = "input-group colorpicker-component colorpicker-element";
        if (this.props.className) {
            className += " " + this.props.className;
        }
        if (this.props.id) {
            this.idColorPicker = this.props.id;
        }
        return (
            <div id={this.idColorPicker} className={className} ref={ref => this.divInput = ref} style={{ ...this.props.style, width: this.props.width }}>
                <input disabled={(this.props.disabled?true:false)} ref={ref => this.input = ref} type="text" value={this.state.value} className="form-control" onChange={this.handleChange}/>
                <span className="input-group-addon"><i style={{ backgroundColor: this.props.value }} ></i></span>
            </div>
        );
    }
}


AnterosColorPicker.propTypes = {
    value: React.PropTypes.string.isRequired,
    format: React.PropTypes.string.isRequired,
    disabled: React.PropTypes.bool
};

AnterosColorPicker.defaultProps = {
    value: '',
    format: 'hex'
}