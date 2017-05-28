import React, { Component } from 'react';
import AnterosNavigatorLink from "./AnterosNavigatorLink";
import lodash from 'lodash';
import { AnterosError } from "./AnterosExceptions";

export default class AnterosPageControl extends Component {
    constructor(props) {
        super(props);
        this.state = { active: undefined };
        this.handleSelectTab = this.handleSelectTab.bind(this);
    }

    handleSelectTab(item) {
        this.setState({ active: item });
    }

    render() {

        let style;
        if (this.props.height){
            style = {height: this.props.height};            
        }

        if (this.props.width){
            style = {...style, width: this.props.width};
        }


        let tabs = [];
        let contents = [];
        if (this.props.children) {
            let arrChildren = React.Children.toArray(this.props.children);
            let _this = this;
            arrChildren.forEach(function (child) {
                let active = child.props.active;
                if (_this.state.active) {
                    active = false;
                    if (_this.state.active == child.props.caption) {
                        active = true;
                    }
                }

                if (!child.props.id) {
                    throw new AnterosError("Informe um ID para aba.");
                }

                if (!child.props.caption) {
                    throw new AnterosError("Informe o título(caption) para aba.");
                }

                let href = "#" + child.props.id;


                tabs.push(React.createElement(AnterosTabLink, {
                    key: lodash.uniqueId(),
                    active: active,
                    href: href,
                    disabled: child.props.disabled,
                    caption: child.props.caption,
                    icon: child.props.icon
                }
                ));

                contents.push(React.createElement(AnterosTabContent, {
                    key: lodash.uniqueId(),
                    active: active,
                    id: child.props.id
                }, child.props.children
                ));
            });
        }

        return (
            <div className="page-control panel" style={style}>
                <div className="page-control-header panel-heading">
                    <ul className="panel-default nav nav-tabs page-control-header-tabs pull-xs-left" role="tablist">
                        {tabs}
                    </ul>
                </div>
                <div className="tab-content">
                    {contents}
                </div>
            </div>);
    }
}


class AnterosTabLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let className = "nav-link";
        if (this.props.active) {
            className += " active";
        }
        return (
            <li className="nav-item">
                <a className={className} data-toggle="tab" href={this.props.href} role="tab">{this.props.caption}</a>
            </li>);
    }
}

class AnterosTabContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let className = "tab-pane";
        if (this.props.active) {
            className += " active";
        }
        return (
            <div className={className} id={this.props.id} role="tabpanel">{this.props.children}</div>
        )
    }
}

