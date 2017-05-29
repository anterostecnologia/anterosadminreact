import React, { Component } from 'react';
import AnterosLoginInfo from './AnterosLoginInfo';
import AnterosMenuItem from './AnterosMenuItem';
import { Link } from 'react-router'
import lodash from 'lodash';


export default class AnterosMenu extends Component {
  render() {
    let children = [];
    if (this.props.children) {
      let _this = this;
      let arrChildren = React.Children.toArray(this.props.children);
      arrChildren.forEach(function (child) {
        children.push(React.createElement(AnterosMenuItem, {
          key: lodash.uniqueId(),
          icon: child.props.icon,
          caption: child.props.caption,
          route: child.props.route,
          id: child.props.id,
          active: child.props.active,
          onSelectMenuItem: child.props.onSelectMenuItem,
          level: 1
        },
          child.props.children
        ));
      });
    }


    return (
      <aside className="sidebar">
        <div className="sidebar-container">
          <div className="sidebar-header">
            <div className="brand hidden-md-up">
              <img src={this.props.logo} />
            </div>
          </div>
          <nav className="menu">
            <ul className="nav flex-column" id="sidebar-menu">
              {children}
            </ul>
          </nav>
        </div>
        <footer className="sidebar-footer">
          <ul className="nav " id="customize-menu">
          </ul>
        </footer>
      </aside>
    )
  }
}


