import React, { Component } from 'react';
import lodash from 'lodash';
import { AnterosError } from "./AnterosExceptions";


export default class AnterosMenuItem extends Component {

    constructor(props) {
        super(props);
        this.state = ({ expanded: false });
        this.toggleExpanded = this.toggleExpanded.bind(this);
    }

    toggleExpanded(event) {
        let expanded = !this.state.expanded;
        this.setState({ expanded: expanded });

        if (this.props.onSelectMenuItem) {
            this.props.onSelectMenuItem(this);
        }
        event.stopPropagation();
    }

    render() {
        let newChildren = [];
        if (this.props.children) {
            let _this = this;
            let arrChildren = React.Children.toArray(this.props.children);
            arrChildren.forEach(function (child) {
                if (child.type && child.type.name == "AnterosMenuItem") {
                    newChildren.push(React.createElement(AnterosMenuItem, {
                        key: lodash.uniqueId(),
                        icon: child.props.icon,
                        caption: child.props.caption,
                        active: child.props.active,
                        onSelectMenuItem: child.props.onSelectMenuItem,
                        level: _this.props.level + 1
                    },
                        child.props.children
                    ));
                } else {
                    newChildren.push(child);
                }
            });
        }

        let classItem;
        if (this.props.active == true) {
            classItem = "active";
        }

        let icon;
        if (this.props.icon) {
            icon = (<i className={this.props.icon}></i>);
        }

        let arrowIcon;
        let children;

        if (newChildren && newChildren.length > 0) {
            arrowIcon = (<i className="fa arrow" style={{ float: "right", marginRight: "5px" }} />);
            if (this.state.expanded) {
                classItem = "open";
                children = (<ul>{newChildren}</ul>);
            }
        }

        return (
            <li className={classItem} onClick={this.toggleExpanded}>
                <a href={this.props.href} style={{ paddingLeft: (((this.props.level - 1) * 10) + 10) + "px" }}>
                    {icon}<img src={this.props.image} /> {this.props.caption} {arrowIcon}
                </a>
                {children}
            </li>
        )


    }
}


AnterosMenuItem.propTypes = {
    active: React.PropTypes.bool,
    icon: React.PropTypes.string,
    image: React.PropTypes.string,
    caption: React.PropTypes.string,
    onSelectMenuItem: React.PropTypes.func,
    href: React.PropTypes.string

};

AnterosMenuItem.defaultProps = {
    active: false,
    icon: undefined,
    image: undefined,
    caption: undefined,
    href: undefined
};
