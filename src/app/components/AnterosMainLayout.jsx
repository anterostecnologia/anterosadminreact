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
import SweetAlertView from "../containers/SweetAlertView";
import TooltipsView from "../containers/TooltipsView";
import NotificationsView from "../containers/NotificationsView";

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
            <AnterosMenuItem id="mniBasicUI"  icon="fa fa-home blue" caption="Basic UI">
              <AnterosMenuItem id="mniButtons" route="/home/buttons" onSelectMenuItem={this.onSelectMenuItem}  icon="fa fa-caret-square-o-right blue" caption="Buttons"></AnterosMenuItem>
              <AnterosMenuItem id="mnFButtons" route="/home/fButtons" onSelectMenuItem={this.onSelectMenuItem}  icon="fa fa-play-circle-o blue" caption="Floating buttons"></AnterosMenuItem>
              <AnterosMenuItem id="mniImages" route="/home/images" onSelectMenuItem={this.onSelectMenuItem}  icon="fa fa-file-image-o blue" caption="Images"></AnterosMenuItem>
              <AnterosMenuItem id="mniCards" route="/home/cards" onSelectMenuItem={this.onSelectMenuItem}  icon="zmdi zmdi-card orange" caption="Cards"></AnterosMenuItem>
              <AnterosMenuItem id="mniSAlerts" route="/home/salerts" onSelectMenuItem={this.onSelectMenuItem}  icon="fa fa-bell red" caption="Sweet alerts"></AnterosMenuItem>
              <AnterosMenuItem id="mniNotifications" route="/home/notifications" onSelectMenuItem={this.onSelectMenuItem}  icon="zmdi zmdi-alert-polygon red" caption="Notifications"></AnterosMenuItem>
              <AnterosMenuItem id="mniTooltips" route="/home/tooltips" onSelectMenuItem={this.onSelectMenuItem}  icon="fa fa-comment green" caption="Tooltips"></AnterosMenuItem>
              <AnterosMenuItem id="mniTabs" route="/home/tabs" onSelectMenuItem={this.onSelectMenuItem}  icon="zmdi zmdi-tab" caption="Tabs & Accordions"></AnterosMenuItem>
              <AnterosMenuItem id="mniLists" route="/home/lists" onSelectMenuItem={this.onSelectMenuItem}  icon="fa fa-bars coral" caption="Lists"></AnterosMenuItem>
              <AnterosMenuItem id="mniSwitches" route="/home/switches" onSelectMenuItem={this.onSelectMenuItem}  icon="fa fa-toggle-on" iconColor="orange" caption="Switches &amp; Toggle"></AnterosMenuItem>
              <AnterosMenuItem id="mniSpinners" onSelectMenuItem={this.onSelectMenuItem}  icon="zmdi zmdi-spinner" caption="Spinners"></AnterosMenuItem>
              <AnterosMenuItem id="mniLoaders" onSelectMenuItem={this.onSelectMenuItem}  icon="fa fa-home blue" caption="Loaders"></AnterosMenuItem>
              <AnterosMenuItem id="mniNavs" onSelectMenuItem={this.onSelectMenuItem}  icon="fa fa-home blue" caption="Navs"></AnterosMenuItem>
              <AnterosMenuItem id="mniMenus" onSelectMenuItem={this.onSelectMenuItem}  icon="zmdi zmdi-menu" caption="Menus"></AnterosMenuItem>
              <AnterosMenuItem id="mniProgressBar" route="/home/progressbar" onSelectMenuItem={this.onSelectMenuItem}  icon="fa fa-tasks green" caption="Progress Bars"></AnterosMenuItem>
              <AnterosMenuItem id="mniRibbons" route="/home/ribbons" onSelectMenuItem={this.onSelectMenuItem}  icon="fa fa-tasks green" caption="Ribbons"></AnterosMenuItem>
              <AnterosMenuItem id="mniPagination" onSelectMenuItem={this.onSelectMenuItem}  icon="fa fa-home blue" caption="Pagination"></AnterosMenuItem>
              <AnterosMenuItem id="mniLabels" route="/home/labels" onSelectMenuItem={this.onSelectMenuItem}  icon="fa fa-home blue" caption="Labels & badges"></AnterosMenuItem>
              <AnterosMenuItem id="mniModals" onSelectMenuItem={this.onSelectMenuItem}  icon="fa fa-home blue" caption="Modals"></AnterosMenuItem>
            </AnterosMenuItem>
            <AnterosMenuItem id="mniAdvancedUI" onSelectMenuItem={this.onSelectMenuItem}  icon="fa fa-home blue" caption="Advanced UI"> </AnterosMenuItem>
            <AnterosMenuItem id="mniForms" onSelectMenuItem={this.onSelectMenuItem}  icon="fa fa-address-card-o blue" caption="Forms"> </AnterosMenuItem>
            <AnterosMenuItem id="mniLayouts" onSelectMenuItem={this.onSelectMenuItem}  icon="fa fa-home" caption="Layouts"> </AnterosMenuItem>
            <AnterosMenuItem id="mniTable" onSelectMenuItem={this.onSelectMenuItem}  icon="fa fa-table" caption="Tables"> </AnterosMenuItem>
            <AnterosMenuItem id="mniCharts" onSelectMenuItem={this.onSelectMenuItem}  icon="fa fa-line-chart" caption="Charts"> </AnterosMenuItem>
            <AnterosMenuItem id="mniWidgets" onSelectMenuItem={this.onSelectMenuItem}  icon="fa fa-home" caption="Widgets"> </AnterosMenuItem>
            <AnterosMenuItem id="mniDashBoards" route="/home/security" onSelectMenuItem={this.onSelectMenuItem}  icon="fa fa-home" caption="Dashboards"> </AnterosMenuItem>
            <AnterosMenuItem id="mniMaps" onSelectMenuItem={this.onSelectMenuItem}  icon="fa fa-map-o" caption="Maps"> </AnterosMenuItem>
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
              <AnterosSecurityRoute path='/home/salerts' component={SweetAlertView} isLoggedIn={this.props.isLoggedIn} />
              <AnterosSecurityRoute path='/home/tooltips' component={TooltipsView} isLoggedIn={this.props.isLoggedIn} />
              <AnterosSecurityRoute path='/home/notifications' component={NotificationsView} isLoggedIn={this.props.isLoggedIn} />
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
