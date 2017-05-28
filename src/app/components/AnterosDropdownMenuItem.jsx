import React, { Component } from 'react';



export default class AnterosDropdownMenuItem extends Component {
     constructor(props,context) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event){
        event.preventDefault();
        if (!this.props.disabled && this.props.onSelectMenuItem){
            this.props.onSelectMenuItem(event);
        }
    }


    render() {
        let icon;
        if (this.props.icon) {
            icon = (<i className={this.props.icon}></i>);
        }

        let _className="dropdown-item";
        if (this.props.disabled){
            _className += " disabled";
        }

        return (<a href={this.props.href} onClick={this.onClick}
            className={_className}>
            {icon}<img src={this.props.image} /> {this.props.caption}
        </a>);
    }
}


AnterosDropdownMenuItem.propTypes = {
    disabled: React.PropTypes.bool,
    icon: React.PropTypes.string,
    image: React.PropTypes.string,
    caption: React.PropTypes.string,
    onSelectMenuItem: React.PropTypes.func,
    href: React.PropTypes.string
};

AnterosDropdownMenuItem.defaultProps = {
    disabled: false,
    icon: undefined,
    image: undefined,
    caption: undefined,
    href: undefined
}