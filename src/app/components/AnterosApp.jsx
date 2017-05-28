import React, { Component } from 'react';
import { render } from 'react-dom';
import '../../app/assets/css/app.css';
import AnterosMainLayout from './AnterosMainLayout';
import AnterosNotFound from './AnterosNotFound';
import AnterosLogin from './AnterosLogin';
import AnterosSecurityRoute from './AnterosSecurityRoute';
import Teste from './Teste';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import {connect} from "react-redux";


class AnterosApp extends Component {

    constructor(props,context) {
        super(props);
    }

    render() {
        console.log(this.context);
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to='/home/security' push={true}/>}/>
                        <AnterosSecurityRoute path="/home" component={AnterosMainLayout} isLoggedIn={this.props.isLoggedIn}/>
                        <Route path="/login" component={AnterosLogin} /> 
                        <AnterosSecurityRoute path="/teste" component={Teste} isLoggedIn={this.props.isLoggedIn}/> 
                        <Route component={AnterosNotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      user: state.authentication.currentUser,
      isLoggedIn: state.authentication.isLoggedIn
  };
};

export default connect(mapStateToProps)(AnterosApp);



