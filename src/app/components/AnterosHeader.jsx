import React, { Component } from 'react';



export default class AnterosHeader extends Component {
    constructor(props) {
        super(props);
        this.onSidebarCollapseButtonClick = this.onSidebarCollapseButtonClick.bind(this);
    }

    onSidebarCollapseButtonClick() {
        event.preventDefault();
        $("#app").toggleClass("sidebar-open");
    }

    render() {
        let newNavigatorLinks = [];
        if (this.props.children) {
            let _this = this;
            let arrChildren = React.Children.toArray(this.props.children);
            arrChildren.forEach(function (child) {
                if (child.type && child.type.name == "AnterosNavigatorLink") {
                    newNavigatorLinks.push(child);
                } else if (child.type && child.type.name == "AnterosNavigatorLinkDropdown") {
                    newNavigatorLinks.push(child);
                } else if (child.type && child.type.name == "AnterosFullScreen") {
                    newNavigatorLinks.push(child);    
                }
            });
        }
        return (
            <header className="header">
                <div className="brand hidden-sm-down">
                    <img src={this.props.logo} />
                </div>
                <div className="header-block header-block-collapse hidden-lg-up">
                    <button className="collapse-btn" id="sidebar-collapse-btn" onClick={this.onSidebarCollapseButtonClick}>
                        <i className="fa fa-bars"></i>
                    </button> </div>
                <div className="header-block header-block-search hidden-sm-down">
                    <form role="search">
                        <div className="input-container"> <i className="fa fa-search"></i> <input type="search" placeholder="Search" />
                            <div className="underline"></div>
                        </div>
                    </form>
                </div>
                <div className="header-block header-block-buttons">
                </div>
                <div className="header-block header-block-nav">
                    <ul className="nav-profile ">
                        {newNavigatorLinks}
                    </ul>
                </div>
            </header>
        )
    }
}


