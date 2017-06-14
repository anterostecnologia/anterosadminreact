import React, { Component } from 'react';


export default class AnterosButton extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        $('[data-toggle="tooltip"]').tooltip();
    }

    onClick(event) {
        event.preventDefault();
        if (!this.props.disabled && this.props.onButtonClick) {
            this.props.onButtonClick(event);
        }

        if (!this.props.disabled && this.props.onClick) {
            this.props.onClick(event);
        }
    }

    render() {
        let className = "btn";
        if (this.props.oval) {
            className += " btn-oval";
        }

        if (this.props.circle){
            className += " btn-circle";
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

        if (this.props.info) {
            className += " btn-info";
            if (this.props.outline) {
                className += "-outline";
            }
        }

        if (this.props.link) {
            className += " btn-link";
            if (this.props.outline) {
                className += "-outline";
            }
        }

        if (this.props.warning) {
            className += " btn-warning";
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

        if (this.props.inline){
            className +=" btn-inline";
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

        if (this.props.disabled) {
            className += " disabled";
        }

        let customIcon = this.props.icon;

        if (this.props.facebook){
            className += " btn-facebook"; 
            customIcon = "fa fa-facebook";
        }

        if (this.props.twitter){
            className += " btn-twitter"; 
            customIcon = "fa fa-twitter";
        }

        if (this.props.googlePlus){
            className += " btn-googleplus"; 
            customIcon = "fa fa-google-plus";
        }

        if (this.props.linkedin){
            className += " btn-linkedin"; 
            customIcon = "fa fa-linkedin";
        }

        if (this.props.instagram){
            className += " btn-instagram"; 
            customIcon = "fa fa-instagram";
        }

        if (this.props.pinterest){
            className += " btn-pinterest"; 
            customIcon = "fa fa-pinterest";
        }

        if (this.props.dribbble){
            className += " btn-dribbble"; 
            customIcon = "fa fa-dribbble";
        }

         if (this.props.youtube){
            className += " btn-youtube"; 
            customIcon = "fa fa-youtube";
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

        let dataToggle, ariaHaspopup, ariaExpanded, ariaControls, href;
        if (this.props.dropdown) {
            dataToggle = "dropdown";
            ariaHaspopup = "true";
            ariaExpanded = "true";
            className += " dropdown-toggle";
        }

        if (this.props.collapseContent){
            dataToggle = "collapse";
            ariaExpanded = "true";
            ariaControls=this.props.collapseContent;
            href="#"+this.props.collapseContent;
            className += " collapsed";
        }

        let icon;
        if (customIcon) {
            icon = (<i className={customIcon}></i>);
        }

        let balloonProps = {};
        if (this.props.hint){
            balloonProps = {...balloonProps,"title":this.props.hint};
        }
        if (this.props.hintPosition){
            balloonProps = {...balloonProps,"data-placement":this.props.hintPosition};
        }



        return (
            <button data-toggle={dataToggle} aria-haspopup={ariaHaspopup} aria-expanded={ariaExpanded} aria-controls={ariaControls} href={href}
                {...balloonProps}
                onClick={this.onClick} style={style}
                type="button" className={className}>
                {icon}<img src={this.props.image} /> {this.props.caption}{this.props.children}
            </button>
        )
    }
}

AnterosButton.propTypes = {
    disabled: React.PropTypes.bool,
    oval: React.PropTypes.bool,
    success: React.PropTypes.bool,
    info: React.PropTypes.bool,
    link: React.PropTypes.bool,
    warning: React.PropTypes.bool,
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
    hintPosition: React.PropTypes.oneOf(['top','right','left','bottom']),
    hintSize: React.PropTypes.string,
    facebook: React.PropTypes.bool,
    twitter: React.PropTypes.bool,
    googlePlus: React.PropTypes.bool,
    linkedin: React.PropTypes.bool,
    instagram: React.PropTypes.bool,
    pinterest: React.PropTypes.bool,
    dribbble: React.PropTypes.bool,
    youtube: React.PropTypes.bool,
    inline: React.PropTypes.bool
};

AnterosButton.defaultProps = {
    disabled: false,
    oval: false,
    success: false,
    warning: false,
    info: false,
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
    hintPosition: 'top',
    inline: true  
};


