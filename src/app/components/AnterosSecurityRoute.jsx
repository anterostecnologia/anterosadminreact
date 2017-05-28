
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';


export default class AnterosSecurityRoute extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    var { component, ...rest } = this.props;
    const DynamicComponent = component;
    return (
      <Route {...rest} render={props => (
        (this.props.isLoggedIn && this.props.isLoggedIn == true) ? (
          <DynamicComponent {...props}/>
        ) : (
            <Redirect to={{
              pathname: (this.props.redirectTo?this.props.redirectTo:'/login'),
              state: { from: props.location }
            }} /> 
          )
      )} />);
  }
}
