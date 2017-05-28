import React, { Component } from 'react';
import 'script-loader!moment/min/moment-with-locales.min.js'
import 'script-loader!./AnterosBootstrapDatetimepicker.js'
import './AnterosBootstrapDatetimepicker.css';
import 'script-loader!jquery-mask-plugin/dist/jquery.mask.js'
import lodash from "lodash";

export default class AnterosDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.open = false;
    this.idCalendar = lodash.uniqueId("dtPickerCal");
    this.state = { value: this.props.value };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    let _this = this;
    $(this.divInput).datetimepicker({
      locale: "pt-BR",
      showTodayButton: true,
      showClear: true,
      showClose: true,
      format: this.props.format
    });
    $(this.divInput).on("dp.hide", function (e) {
      _this.open = false;
    });
    $(this.divInput).on("dp.show", function (e) {
      _this.open = true;
    });

    $(this.input).unbind("focus");
    $(this.input).mask('00/00/0000', { placeholder: this.props.placeholder });
  }

  onKeyDown(event) {
    if (event.keyCode == 116) {
      if (!this.open)
        $(this.divInput).datetimepicker("show");
      else
        $(this.divInput).datetimepicker("hide");
      this.input.focus();
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  onKeyPress(event) {
    $(this.divInput).datetimepicker("hide");
  }

  render() {
    let icon = "fa fa-calendar";
    if (this.icon) {
      icon = this.props.icon;
    }
    let className = "input-group date";
    if (this.props.className) {
      className += " " + this.props.className;
    }
    return (
      <div className={className} id={this.props.id} style={{ ...this.props.style, width: this.props.width }} ref={ref => this.divInput = ref}>
        <input disabled={(this.props.disabled ? true : false)} id={lodash.uniqueId("dtPickerCalInput")} ref={ref => this.input = ref} type="text" value={this.state.value} className="form-control" onChange={this.handleChange}
          onKeyPress={this.onKeyPress} onKeyDown={this.onKeyDown} />
        <span className="input-group-addon">
          <span><i id={this.idCalendar} className={icon} /><img src={this.props.image} /></span></span>
      </div>
    );
  }
}


AnterosDatePicker.propTypes = {
  placeHolder: React.PropTypes.string,
  format: React.PropTypes.string,
  value: React.PropTypes.string.isRequired,
  disabled: React.PropTypes.bool
};

AnterosDatePicker.defaultProps = {
  placeHolder: '',
  format: 'DD/MM/YYYY',
  value: ''
}