import React, { Component } from 'react';



export default class AnterosAlert extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let icon;
        let className = "alert alert-close alert-dismissible fade in show";
        if (this.props.showBorder==undefined) {
            className += " alert-no-border";
        }
        
        if (this.props.fill){
            className += " alert-fill";
        }
        if (this.props.success){
            className += " alert-success";
        } else if (this.props.info){
            className += " alert-info";
        } else if (this.props.warning){
            className += " alert-warning";
        } else if (this.props.danger){
            className += " alert-danger";
        } else if (this.props.purple){
            className += " alert-purple";
        } else if (this.props.greyDarker){
            className += " alert-grey-darker";
        } else if (this.props.blueDirty) {
            className += " alert-blue-dirty";
        } else if (this.props.aquamarine){
            className += " alert-aquamarine";  
        } else if (this.props.facebook){
            className += " alert-facebook";
            icon = (<i className="fa fa-facebook"></i>);
        } else if (this.props.twitter){
            className += " alert-twitter";
            icon = (<i className="fa fa-twitter"></i>);
        } else if (this.props.googlePlus){
            className += " alert-google-plus";
            icon = (<i className="fa fa-google-plus"></i>);
        } else if (this.props.linkedin){
            className += " alert-linkedin";
            icon = (<i className="fa fa-linkedin"></i>);
        } else {
            className += " alert-info";
        }

        if (this.props.showBorderLeft){
            className += " alert-border-left";
        }

        if (this.props.textColored){
            className += " alert-txt-colored"; 
        }

        let classNameAvatar="";
        if (this.props.avatar || this.props.avatar32){
            className += " alert-avatar";
            classNameAvatar = " avatar-preview avatar-preview-32" 
        } else if (this.props.avatar16) {
            className += " alert-avatar";
            classNameAvatar = " avatar-preview avatar-preview-16" 
        } else if (this.props.avatar48){
            className += " alert-avatar";
            classNameAvatar = " avatar-preview avatar-preview-48" 
        } else if (this.props.avatar64){
            className += " alert-avatar";
            classNameAvatar = " avatar-preview avatar-preview-64"     
        }
             
        if (this.props.icon) {
            icon = (<i className={this.props.icon}></i>);
            className += " alert-icon";
        }

        return (<div className={className} role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
            {icon}{(this.props.image ?<div className={classNameAvatar}><img src={this.props.image}/></div>:null)}
            {this.props.children}
        </div>);
    }
}



AnterosAlert.propTypes = {
    showBorder: React.PropTypes.bool,
    fill: React.PropTypes.bool
};

AnterosAlert.defaultProps = {
    showBorder: undefined,
    fill: undefined
}
