import React, { Component } from 'react';
import 'script-loader!bootstrap-maxlength/bootstrap-maxlength.js'
import 'bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css';
import lodash from "lodash";

export default class AnterosTextArea extends React.Component {
    constructor(props) {
        super(props);
        this.idTextArea = lodash.uniqueId("textArea");
        this.state = { value: this.props.value };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        let _this = this;
        $(this.input).maxlength({
            alwaysShow: true,
            validate: true,
            warningClass: "label label-input-success",
            limitReachedClass: "label label-input-danger"
        });

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        if (this.props.onChange){
            this.props.onChange(event);
        }
    }

    render() {
        let className = "";
        if (this.props.className) {
            className += " " + this.props.className;
        }
        if (this.props.id) {
            this.idTextArea = this.props.id;
        }
        return (
            <textarea maxLength={this.props.maxLenght}
                id={this.idTextArea}
                placeholder={this.placeHolder}
                disabled={(this.props.disabled ? true : false)}
                style={{ ...this.props.style, width: this.props.width }}
                ref={ref => this.input = ref} 
                value={this.state.value}
                className="form-control"
                onChange={this.handleChange}
            />
        );
    }
}


AnterosTextArea.propTypes = {
    value: React.PropTypes.string.isRequired,
    placeHolder: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    maxLenght: React.PropTypes.number.isRequired
};

AnterosTextArea.defaultProps = {
    value: '',
    maxLenght: 0
}