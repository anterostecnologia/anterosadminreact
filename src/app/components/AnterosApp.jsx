import React, { Component } from 'react';
import { render } from 'react-dom';
import 'anteros-react/lib/anteros-react.min.css';
import AnterosMainLayout from './AnterosMainLayout';
import {AnterosNotFound} from 'anteros-react';
import AnterosLogin from './AnterosLogin';
import {AnterosSecurityRoute} from 'anteros-react';
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
                        <Route exact path="/" render={() => <Redirect to='/home/default' push={true}/>}/>
                        <Route path="/home" component={AnterosMainLayout} />
                        <Route path="/login" component={AnterosLogin} /> 
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



