import React, { Component } from 'react';
import { AnterosMainContainer } from 'anteros-react-containers';
import { AnterosFullScreen, AnterosHeader, AnterosFooter } from "anteros-react-layout";
import { AnterosNotFound, AnterosError } from 'anteros-react-core';
import { AnterosNavigatorLinkDropdown, AnterosNavigatorLink, AnterosMenu, AnterosMenuItem  } from "anteros-react-menu";
import { AnterosDropdownMenu, AnterosDropdownMenuItem, AnterosDropdownDivider} from "anteros-react-buttons";         
import { AnterosBadge } from "anteros-react-label";
import { AnterosSecurityRoute } from "anteros-react-security";
import { connect } from "react-redux";
import { handleLogout } from '../actions/authenticationActions';
import 'font-awesome/css/font-awesome.min.css';
import {
  Route, Link, Switch, NavLink
} from 'react-router-dom';

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
import TablesView from "../containers/TablesView";
import TablesLayoutView from "../containers/TablesLayoutView";
import DataTablesView from "../containers/DataTablesView";
import ModalsView from "../containers/ModalsView";
import HomeView from "../containers/HomeView";
import KanbanView from "../containers/KanbanView";
import MiscView from "../containers/MiscView";
import ChartsView from "../containers/ChartsView";
import SplittersView from "../containers/SplittersView";
import NestableView from "../containers/NestableView";
import IconsAwesomeView from "../containers/IconsAwesomeView";
import IconsIcoFontsView from "../containers/IconsIcoFontsView";
import WizardsView from "../containers/WizardsView";
import FlexContainerView from "../containers/FlexContainerView";
// import AceEditorView from "../containers/AceEditorView";
import AbsoluteGridView from "../containers/AbsoluteGridView";
import CarouselSlickView from "../containers/CarouselSlickView";
import SparkLinesView from "../containers/SparkLinesView";


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
            <AnterosMenuItem id="mniBasicUI" icon="fa fa-home blue" caption="Basic UI">
              <AnterosMenuItem id="mniButtons" route="/home/buttons" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-caret-square-o-right blue" caption="Buttons"></AnterosMenuItem>
              <AnterosMenuItem id="mnFButtons" route="/home/fButtons" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-play-circle-o blue" caption="Floating buttons"></AnterosMenuItem>
              <AnterosMenuItem id="mniImages" route="/home/images" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-file-image-o blue" caption="Images"></AnterosMenuItem>
              <AnterosMenuItem id="mniCards" route="/home/cards" onSelectMenuItem={this.onSelectMenuItem} icon="zmdi zmdi-card orange" caption="Cards"></AnterosMenuItem>
              <AnterosMenuItem id="mniSAlerts" route="/home/salerts" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-bell red" caption="Sweet alerts"></AnterosMenuItem>
              <AnterosMenuItem id="mniNotifications" route="/home/notifications" onSelectMenuItem={this.onSelectMenuItem} icon="zmdi zmdi-alert-polygon red" caption="Notifications"></AnterosMenuItem>
              <AnterosMenuItem id="mniTooltips" route="/home/tooltips" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-comment green" caption="Tooltips"></AnterosMenuItem>
              <AnterosMenuItem id="mniTabs" route="/home/tabs" onSelectMenuItem={this.onSelectMenuItem} icon="zmdi zmdi-tab" caption="Tabs & Accordions"></AnterosMenuItem>
              <AnterosMenuItem id="mniLists" route="/home/lists" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-bars coral" caption="Lists"></AnterosMenuItem>
              <AnterosMenuItem id="mniSwitches" route="/home/switches" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-toggle-on" iconColor="orange" caption="Switches &amp; Toggle"></AnterosMenuItem>
              <AnterosMenuItem id="mniSpinners" onSelectMenuItem={this.onSelectMenuItem} icon="zmdi zmdi-spinner" caption="Spinners"></AnterosMenuItem>
              <AnterosMenuItem id="mniLoaders" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-home blue" caption="Loaders"></AnterosMenuItem>
              <AnterosMenuItem id="mniNavs" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-home blue" caption="Navs"></AnterosMenuItem>
              <AnterosMenuItem id="mniMenus" onSelectMenuItem={this.onSelectMenuItem} icon="zmdi zmdi-menu" caption="Menus"></AnterosMenuItem>
              <AnterosMenuItem id="mniProgressBar" route="/home/progressbar" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-tasks green" caption="Progress Bars"></AnterosMenuItem>
              <AnterosMenuItem id="mniRibbons" route="/home/ribbons" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-tasks green" caption="Ribbons"></AnterosMenuItem>
              <AnterosMenuItem id="mniPagination" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-home blue" caption="Pagination"></AnterosMenuItem>
              <AnterosMenuItem id="mniLabels" route="/home/labels" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-home blue" caption="Labels & badges"></AnterosMenuItem>
              <AnterosMenuItem id="mniModals" route="/home/modals" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-home blue" caption="Modals"></AnterosMenuItem>
            </AnterosMenuItem>
            <AnterosMenuItem id="mniAdvancedUI" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-home blue" caption="Advanced UI"> </AnterosMenuItem>
            <AnterosMenuItem id="mniForms" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-address-card-o blue" caption="Forms"> </AnterosMenuItem>
            <AnterosMenuItem id="mniLayouts" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-home" caption="Layouts"> </AnterosMenuItem>
            <AnterosMenuItem id="mniLayoutsFlex" route="/home/layoutflex" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-home" caption="Layouts flex"> </AnterosMenuItem>
            {/* <AnterosMenuItem id="mniAceEditor" route="/home/aceeditor" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-home" caption="Ace editor"> </AnterosMenuItem> */}
            <AnterosMenuItem id="mniGrid" route="/home/grid" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-home" caption="Absolute grid"> </AnterosMenuItem>
            <AnterosMenuItem id="mniCarousel" route="/home/carousel" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-home" caption="Carousel"> </AnterosMenuItem>
            <AnterosMenuItem id="mniIcons" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-star" caption="Icons">
              <AnterosMenuItem id="mniIconsAwesome" route="/home/iconsawesome" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-star" caption="Font awesome" />
              <AnterosMenuItem id="mniIconsIcoFonts" route="/home/iconsicofonts" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-star" caption="Ico fonts" />
              <AnterosMenuItem id="mniIconsWeather" route="/home/iconsweather" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-star" caption="Weather" />
            </AnterosMenuItem>
            <AnterosMenuItem id="mniTable" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-table" caption="Tables">
              <AnterosMenuItem id="mniBasicTables" route="/home/basictables" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-home blue" caption="Basic tables"></AnterosMenuItem>
              <AnterosMenuItem id="mniLayoutTables" route="/home/layouttables" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-home blue" caption="Layout tables"></AnterosMenuItem>
              <AnterosMenuItem id="mniDataTables" route="/home/datatables" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-home blue" caption="Data tables"></AnterosMenuItem>
            </AnterosMenuItem>
            <AnterosMenuItem id="mniKanbanBoard" route="/home/kanbanboard" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-home blue" caption="Kanban board"></AnterosMenuItem>
            <AnterosMenuItem id="mniMisc" route="/home/miscellaneous" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-home blue" caption="Miscellaneous"></AnterosMenuItem>
            <AnterosMenuItem id="mniSplitters" route="/home/splitters" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-columns blue" caption="Splitters"></AnterosMenuItem>
            <AnterosMenuItem id="mniSparklines" route="/home/sparklines" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-columns blue" caption="Sparklines"></AnterosMenuItem>
            <AnterosMenuItem id="mniNestable" route="/home/nestable" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-columns blue" caption="Nestable"></AnterosMenuItem>
            <AnterosMenuItem id="mniCharts" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-line-chart" caption="Charts">
              <AnterosMenuItem id="mniECharts" route="/home/echarts" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-line-chart blue" caption="ECharts"></AnterosMenuItem>
            </AnterosMenuItem>
            <AnterosMenuItem id="mniWidgets" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-home" caption="Widgets"> </AnterosMenuItem>
            <AnterosMenuItem id="mniDashBoards" route="/home/dashboards" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-home" caption="Dashboards"> </AnterosMenuItem>
            <AnterosMenuItem id="mniMaps" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-map-o" caption="Maps"> </AnterosMenuItem>
            <AnterosMenuItem id="mniWizards" route="/home/wizards" onSelectMenuItem={this.onSelectMenuItem} icon="fa fa-map-o" caption="Wizards"> </AnterosMenuItem>
          </AnterosMenu>


          <div className="sidebar-overlay" id="sidebar-overlay" onClick={this.onSidebarOverlayClick}></div>
          <AnterosMainContainer >
            <Switch>
              <Route path='/home/default' component={HomeView} isLoggedIn={true} />
              <Route path='/home/images' component={ImagesView} isLoggedIn={true} />
              <Route path='/home/buttons' component={ButtonsView} isLoggedIn={true} />
              <Route path='/home/cards' component={CardsView} isLoggedIn={true} />
              <Route path='/home/progressbar' component={ProgressBarView} isLoggedIn={true} />
              <Route path='/home/switches' component={SwitchesView} isLoggedIn={true} />
              <Route path='/home/ribbons' component={RibbonsView} isLoggedIn={true} />
              <Route path='/home/tabs' component={TabsView} isLoggedIn={true} />
              <Route path='/home/fButtons' component={FloatingButtonsView} isLoggedIn={true} />
              <Route path='/home/lists' component={ListsView} isLoggedIn={true} />
              <Route path='/home/labels' component={LabelsView} isLoggedIn={true} />
              <Route path='/home/layoutflex' component={FlexContainerView} isLoggedIn={true} />
              {/* <Route path='/home/aceeditor' component={AceEditorView} isLoggedIn={true} /> */}
              <Route path='/home/grid' component={AbsoluteGridView} isLoggedIn={true} />
              <Route path='/home/carousel' component={CarouselSlickView} isLoggedIn={true} />
              <Route path='/home/salerts' component={SweetAlertView} isLoggedIn={true} />
              <Route path='/home/tooltips' component={TooltipsView} isLoggedIn={true} />
              <Route path='/home/notifications' component={NotificationsView} isLoggedIn={true} />
              <Route path='/home/basictables' component={TablesView} isLoggedIn={true} />
              <Route path='/home/layouttables' component={TablesLayoutView} isLoggedIn={true} />
              <Route path='/home/datatables' component={DataTablesView} isLoggedIn={true} />
              <Route path='/home/modals' component={ModalsView} isLoggedIn={true} />
              <Route path='/home/kanbanboard' component={KanbanView} isLoggedIn={true} />
              <Route path='/home/miscellaneous' component={MiscView} isLoggedIn={true} />
              <Route path='/home/echarts' component={ChartsView} isLoggedIn={true} />
              <Route path='/home/splitters' component={SplittersView} isLoggedIn={true} />
              <Route path='/home/nestable' component={NestableView} isLoggedIn={true} />
              <Route path='/home/iconsawesome' component={IconsAwesomeView} isLoggedIn={true} />
              <Route path='/home/iconsicofonts' component={IconsIcoFontsView} isLoggedIn={true} />
              <Route path='/home/wizards' component={WizardsView} isLoggedIn={true} />
              <Route path='/home/sparklines' component={SparkLinesView} isLoggedIn={true} />
            </Switch>
            {this.props.children}
          </AnterosMainContainer>

          <AnterosFooter />

        </div>
      </div >
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
