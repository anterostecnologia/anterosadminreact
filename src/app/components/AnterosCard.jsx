import React, { Component } from 'react';
import AnterosButton from "./AnterosButton";


class AnterosCard extends Component {
    render() {

        let newChildren = [];
        let headerActions = [];
        let footerActions = [];
        if (this.props.children) {
            let _this = this;
            let arrChildren = React.Children.toArray(this.props.children);
            arrChildren.forEach(function (child) {
                if (child.type && child.type.name == "HeaderActions") {
                    headerActions = child.props.children;
                } else if (child.type && child.type.name == "FooterActions") {
                    footerActions = child.props.children;
                } else {
                    newChildren.push(child);
                }
            });
        }

        let className = "card card-default";
        if (this.props.success) {
            className = "card card-success";
        }
        if (this.props.danger) {
            className = "card card-danger";
        }
        if (this.props.info) {
            className = "card card-info";
        }
        if (this.props.primary) {
            className = "card card-primary";
        }
        if (this.props.warning) {
            className = "card card-warning";
        }

        if (this.props.className) {
            className += " " + this.props.className;
        }

        return (
            <div>
                <div id={this.props.id} className={className} style={{ ...this.props.style, height: this.props.height, width: this.props.width }}>
                    {this.props.showHeader==true ? (<div className="card-header">
                        <div className="header-block">
                            <div className="caption">
                                <p className="title"> {this.props.title} </p>
                            </div>

                            <div className="actions">
                                {headerActions}
                            </div>
                        </div>
                    </div>) : null}
                    <div className="card-block">
                        {newChildren}
                    </div>
                    {this.props.footer || (footerActions && footerActions.length > 0 && this.props.showFooter) ? <div className="card-footer"> {this.props.footer} {footerActions} </div> : false}
                </div>
            </div>
        )
    }
}


AnterosCard.propTypes = {
    className: React.PropTypes.string,
    danger: React.PropTypes.bool,
    success: React.PropTypes.bool,
    info: React.PropTypes.bool,
    warning: React.PropTypes.bool,
    primary: React.PropTypes.bool,
    secondary: React.PropTypes.bool,
    id: React.PropTypes.string,
    showHeader: React.PropTypes.bool.isRequired,
    showFooter: React.PropTypes.bool.isRequired
};

AnterosCard.defaultProps = {
    showHeader: true,
    showFooter: true
}

export class HeaderActions extends Component {
    render() {
        return (<div>{this.props.children}</div>);
    }
}

export class FooterActions extends Component {
    render() {
        return (<div>{this.props.children}</div>);
    }
}


export default AnterosCard;
