import React, { Component } from 'react';


export default class AnterosButton extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event){
        event.preventDefault();
        if (!this.props.disabled && this.props.onButtonClick){
            this.props.onButtonClick(event);
        }

        if (!this.props.disabled && this.props.onClick){
            this.props.onClick(event);
        }
    }

    render() {
        let className = "btn";
        if (this.props.oval) {
            className += " btn-oval";
        }

        if (this.props.success) {
            className += " btn-success";
            if (this.props.outline) {
                className += "-outline";
            }
        }

        if (this.props.large) {
            className += " btn-lg";
        }

        if (this.props.small) {
            className += " btn-sm";
        }

        if (this.props.primary) {
            className += " btn-primary";
            if (this.props.outline) {
                className += "-outline";
            }
        }

        if (this.props.danger) {
            className += " btn-danger";
            if (this.props.outline) {
                className += "-outline";
            }
        }

        if (this.props.secondary) {
            className += " btn-secondary";
            if (this.props.outline) {
                className += "-outline";
            }
        }

        if (this.props.pillLeft) {
            className += " btn-pill-left";
        }

        if (this.props.pillRight) {
            className += " btn-pill-right";
        }

        if (this.props.block) {
            className += " btn-block";
        }

        if (this.props.disabled){
            className += " disabled";
        }

        let style;

        if (this.props.backgroundColor) {
            style = { backgroundColor: this.props.backgroundColor };
        }

        if (this.props.borderColor) {
            if (style) {
                style = { ...style, borderColor: this.props.borderColor };
            } else {
                style = { borderColor: this.props.borderColor };
            }
        }

        if (this.props.color) {
            if (style) {
                style = { ...style, color: this.props.color };
            } else {
                style = { color: this.props.color };
            }
        }

        let dataToggle,ariaHaspopup,ariaExpanded;
        if (this.props.dropdown){
            dataToggle = "dropdown";
            ariaHaspopup = "true";
            ariaExpanded = "true";
            className+= " dropdown-toggle";
        }

        let icon;
        if (this.props.icon) {
            icon = (<i className={this.props.icon}></i>);
        }

        return (
            <button data-toggle={dataToggle} aria-haspopup={ariaHaspopup} aria-expanded={ariaExpanded} 
                    data-balloon-length={this.props.hintSize} data-balloon={this.props.hint} data-balloon-pos={this.props.hintPosition}
                    onClick={this.onClick} style={style} 
                    type="button" className={className}>
                    {icon}<img src={this.props.image}/> {this.props.caption}
            </button>
        )
    }
}

AnterosButton.propTypes = {
  disabled: React.PropTypes.bool,
  oval: React.PropTypes.bool,
  success: React.PropTypes.bool,
  large: React.PropTypes.bool,
  small: React.PropTypes.bool,
  primary: React.PropTypes.bool,
  danger: React.PropTypes.bool,
  secondary: React.PropTypes.bool,
  pillLeft: React.PropTypes.bool,
  pillRight: React.PropTypes.bool,
  block: React.PropTypes.bool,
  backgroundColor: React.PropTypes.string,
  borderColor: React.PropTypes.string,
  color: React.PropTypes.string,
  dropdown: React.PropTypes.bool,
  icon: React.PropTypes.string,
  image: React.PropTypes.string,
  caption: React.PropTypes.string,
  onButtonClick: React.PropTypes.func,
  hint: React.PropTypes.string,
  hintPosition: React.PropTypes.string,
  hintSize: React.PropTypes.string
};

AnterosButton.defaultProps = {
  disabled: false,
  oval: false,
  success: false,
  large: false,
  small: false,
  primary: false,
  danger: false,
  secondary: false,
  pillLeft: false,
  pillRight: false,
  block: false,
  backgroundColor: undefined,
  borderColor: undefined,
  color: undefined,
  dropdown: false,
  icon: undefined,
  image: undefined,
  caption: undefined,
  hintSize : "fit"
};
