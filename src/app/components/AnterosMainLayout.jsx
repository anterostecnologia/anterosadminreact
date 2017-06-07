import React, { Component } from 'react';
import AnterosHeader from './AnterosHeader';
import AnterosMenu from './AnterosMenu';
import AnterosMenuItem from './AnterosMenuItem';
import AnterosFooter from './AnterosFooter';
import AnterosMainContainer from './AnterosMainContainer';
import SecurityControl from './SecurityControl';
import AnterosNotFound from './AnterosNotFound';
import AnterosFullScreen from './AnterosFullScreen';
import AnterosNavigatorLinkDropdown from "./AnterosNavigatorLinkDropdown";
import AnterosNavigatorLink from "./AnterosNavigatorLink";
import AnterosDropdownMenu from "./AnterosDropdownMenu";
import AnterosDropdownMenuItem from "./AnterosDropdownMenuItem";
import AnterosDropdownDivider from "./AnterosDropdownDivider";
import AnterosBadge from "./AnterosBadge";
import { connect } from "react-redux";
import { handleLogout } from '../actions/authenticationActions';
import 'font-awesome/css/font-awesome.min.css';
import {
  Route, Link, Switch, NavLink
} from 'react-router-dom';
import AnterosSecurityRoute from "./AnterosSecurityRoute";
import ImagesView from "../containers/ImagesView";
import ButtonsView from "../containers/ButtonsView";
import CardsView from "../containers/CardsView";
import ProgressBarView from "../containers/ProgressBarView";
import SwitchesView from "../containers/SwitchesView";
import RibbonsView from "../containers/RibbonsView";
import TabsView from "../containers/TabsView";
import FloatingButtonsView from "../containers/FloatingButtonsView";
import ListsView from "../containers/ListsView"
import LabelsView from "../containers/LabelsView"
import SweatAlertView from "../containers/SweatAlertView";

class AnterosMainLayout extends Component {

  constructor(props) {
    super(props);
    this.onSelectMenuItem = this.onSelectMenuItem.bind(this);
    this.onHandleLogout = this.onHandleLogout.bind(this);
    this.onSidebarOverlayClick = this.onSidebarOverlayClick.bind(this);
  }

  onSelectMenuItem(menuItem) {
    this.props.history.push(menuItem.props.route);
  }

  onHandleLogout() {
    this.props.handleLogout();
  }

  onSidebarOverlayClick() {
    $("#app").removeClass("sidebar-open");
  }

  render() {
    return (
      <div className="main-wrapper">
        <div className="app header-fixed footer-fixed sidebar-fixed" id="app">
          <AnterosHeader logo={require('../assets/img/security-menu-1.png')}>
            <AnterosFullScreen />
            <AnterosNavigatorLink caption="" badge={<AnterosBadge caption=" 7 " success />} icon="fa fa-envelope-o" />
            <AnterosNavigatorLink caption="" badge={<AnterosBadge caption=" 2 " warning />} icon="fa fa-comment-o" />
            <AnterosNavigatorLink caption="" badge={<AnterosBadge caption=" 3 " danger />} icon="fa fa-bell-o" />
            <AnterosNavigatorLinkDropdown caption="Edson" image={require('../assets/img/user.png')} imageWidth="36px" imageHeight="36px" imageCircle>
              <AnterosDropdownMenu className="profile-dropdown-menu">
                <AnterosDropdownMenuItem caption="Perfil" icon="fa fa-user icon" />
                <AnterosDropdownMenuItem caption="Notificações" icon="fa fa-bell icon" />
                <AnterosDropdownMenuItem caption="Configurações" icon="fa fa-gear icon" />
                <AnterosDropdownDivider />
                <AnterosDropdownMenuItem caption="Sair" icon="fa fa-power-off icon" onSelectMenuItem={this.onHandleLogout} />
              </AnterosDropdownMenu>
            </AnterosNavigatorLinkDropdown>
          </AnterosHeader>


          <AnterosMenu logo={require('../assets/img/security-menu-1.png')}>
            <AnterosMenuItem active={true} icon="fa fa-home blue" caption="Basic UI">
              <AnterosMenuItem id="mniButtons" route="/home/buttons" onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-file-image-o blue" caption="Buttons"></AnterosMenuItem>
              <AnterosMenuItem id="mnFButtons" route="/home/fButtons" onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-file-image-o blue" caption="Floating buttons"></AnterosMenuItem>
              <AnterosMenuItem id="mniImages" route="/home/images" onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-file-image-o blue" caption="Images"></AnterosMenuItem>
              <AnterosMenuItem id="mniCards" route="/home/cards" onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-file-image-o blue" caption="Cards"></AnterosMenuItem>
              <AnterosMenuItem id="mniSAlerts" route="/home/salerts" onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-home red" caption="Sweat alerts"></AnterosMenuItem>
              <AnterosMenuItem onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-home green" caption="Panels"></AnterosMenuItem>
              <AnterosMenuItem id="mniTabs" route="/home/tabs" onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-home blue" caption="Tabs & Accordions"></AnterosMenuItem>
              <AnterosMenuItem id="mniLists" route="/home/lists" onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-bars coral" caption="Lists"></AnterosMenuItem>
              <AnterosMenuItem id="mniSwitches" route="/home/switches" onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-toggle-on" iconColor="orange" caption="Switches &amp; Toggle"></AnterosMenuItem>
              <AnterosMenuItem onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-home blue" caption="Spinners"></AnterosMenuItem>
              <AnterosMenuItem onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-home blue" caption="Panels"></AnterosMenuItem>
              <AnterosMenuItem onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-home blue" caption="Navs"></AnterosMenuItem>
              <AnterosMenuItem onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-home blue" caption="Menus"></AnterosMenuItem>
              <AnterosMenuItem id="mniProgressBar" route="/home/progressbar" onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-tasks green" caption="Progress Bars"></AnterosMenuItem>
              <AnterosMenuItem id="mniRibbons" route="/home/ribbons" onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-tasks green" caption="Ribbons"></AnterosMenuItem>
              <AnterosMenuItem onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-home blue" caption="Pagination"></AnterosMenuItem>
              <AnterosMenuItem id="mniLabels" route="/home/labels" onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-home blue" caption="Labels & badges"></AnterosMenuItem>
              <AnterosMenuItem onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-home blue" caption="Modals"></AnterosMenuItem>
            </AnterosMenuItem>
            <AnterosMenuItem onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-home blue" caption="Advanced UI"> </AnterosMenuItem>
            <AnterosMenuItem onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-home blue" caption="Forms"> </AnterosMenuItem>
            <AnterosMenuItem onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-home" caption="Layouts"> </AnterosMenuItem>
            <AnterosMenuItem onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-home" caption="Tables"> </AnterosMenuItem>
            <AnterosMenuItem onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-piechart" caption="Charts"> </AnterosMenuItem>
            <AnterosMenuItem onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-home" caption="Widgets"> </AnterosMenuItem>
            <AnterosMenuItem id="mniDashBoards" route="/home/security" onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-home" caption="Dashboards"> </AnterosMenuItem>
            <AnterosMenuItem onSelectMenuItem={this.onSelectMenuItem} active={true} icon="fa fa-home" caption="Maps"> </AnterosMenuItem>
          </AnterosMenu>


          <div className="sidebar-overlay" id="sidebar-overlay" onClick={this.onSidebarOverlayClick}></div>
          <AnterosMainContainer >
            <Switch>
              <AnterosSecurityRoute path='/home/security' component={SecurityControl} isLoggedIn={this.props.isLoggedIn} />
              <AnterosSecurityRoute path='/home/images' component={ImagesView} isLoggedIn={this.props.isLoggedIn} />
              <AnterosSecurityRoute path='/home/buttons' component={ButtonsView} isLoggedIn={this.props.isLoggedIn} />
              <AnterosSecurityRoute path='/home/cards' component={CardsView} isLoggedIn={this.props.isLoggedIn} />
              <AnterosSecurityRoute path='/home/progressbar' component={ProgressBarView} isLoggedIn={this.props.isLoggedIn} />
              <AnterosSecurityRoute path='/home/switches' component={SwitchesView} isLoggedIn={this.props.isLoggedIn} />
              <AnterosSecurityRoute path='/home/ribbons' component={RibbonsView} isLoggedIn={this.props.isLoggedIn} />
              <AnterosSecurityRoute path='/home/tabs' component={TabsView} isLoggedIn={this.props.isLoggedIn} />
              <AnterosSecurityRoute path='/home/fButtons' component={FloatingButtonsView} isLoggedIn={this.props.isLoggedIn} />
              <AnterosSecurityRoute path='/home/lists' component={ListsView} isLoggedIn={this.props.isLoggedIn} />
              <AnterosSecurityRoute path='/home/labels' component={LabelsView} isLoggedIn={this.props.isLoggedIn} />
              <AnterosSecurityRoute path='/home/salerts' component={SweatAlertView} isLoggedIn={this.props.isLoggedIn} />
            </Switch>
            {this.props.children}
          </AnterosMainContainer>

          <AnterosFooter />

        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.authentication.currentUser,
    isLoggedIn: state.authentication.isLoggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (currentUser) => {
      dispatch(handleLogin(currentUser));
    },
    handleLogout: () => {
      dispatch(handleLogout());
    },
    setToken: (token) => {
      dispatch(setToken(token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnterosMainLayout);
