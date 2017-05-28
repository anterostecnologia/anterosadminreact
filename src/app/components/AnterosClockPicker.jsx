import React, { Component } from 'react';
import 'script-loader!moment/min/moment-with-locales.min.js';
import 'script-loader!clockpicker/dist/bootstrap-clockpicker.js';
import 'script-loader!clockpicker/dist/bootstrap-clockpicker.css';
import 'script-loader!jquery-mask-plugin/dist/jquery.mask.js';
import lodash from "lodash";

export default class AnterosClockPicker extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.open = false;
    this.idCalendar = lodash.uniqueId("cPickerCal");
    this.state = { value: this.props.value };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    let _this = this;
    $(this.divInput).clockpicker({
      autoclose: true,
      init: function () {
      },
      beforeShow: function () {
      },
      afterShow: function () {
        _this.open = true;
      },
      beforeHide: function () {
      },
      afterHide: function () {
        _this.open = false;
      },
      beforeHourSelect: function () {
      },
      afterHourSelect: function () {
      },
      beforeDone: function () {
      },
      afterDone: function () {
      }
    });

    $(this.input).unbind("focus");
    $(this.input).mask(this.props.inputMask, { placeholder: this.props.placeholder });
  }

  onKeyDown(event) {
    if (event.keyCode == 116) {
      if (!this.open)
        $(this.divInput).clockpicker("show");
      else
        $(this.divInput).clockpicker("hide");
      this.input.focus();
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  onKeyPress(event) {
    $(this.divInput).clockpicker("hide");
  }

  render() {
    let icon = "fa fa-clock-o";
    if (this.icon) {
      icon = this.props.icon;
    }
    let className = "input-group time";
    if (this.props.className) {
      className += " " + this.props.className;
    }
    return (
      <div className={className} id={this.props.id} style={{ ...this.props.style, width: this.props.width }} ref={ref => this.divInput = ref}>
        <input disabled={(this.props.disabled?true:false)}  id={lodash.uniqueId("cPickerCalInput")} ref={ref => this.input = ref} type="text" value={this.state.value} className="form-control" onChange={this.handleChange}
          onKeyPress={this.onKeyPress} onKeyDown={this.onKeyDown} placeholder={this.props.placeHolder} />
        <span className="input-group-addon">
          <span><i id={this.idCalendar} className={icon} /><img src={this.props.image} /></span></span>
      </div>
    );
  }
}


AnterosClockPicker.propTypes = {
  placeHolder: React.PropTypes.string,
  format: React.PropTypes.string,
  value: React.PropTypes.string.isRequired
};

AnterosClockPicker.defaultProps = {
  placeHolder: '',
  format: 'hh:mm:ss',
  inputMask: '00:00:00',
  value: ''
}