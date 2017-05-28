
import React, { Component } from 'react';
import AnterosButton from './AnterosButton';


export default class AnterosDropdownButton extends Component {
    render() {
        let { children, ...rest } = this.props;
   
        return (<div className="btn-group">
            <AnterosButton  {...rest} dropdown>
            </AnterosButton>
            {children}
        </div>);
    }
}


AnterosDropdownButton.propTypes = {
  oval: React.PropTypes.bool,
  success: React.PropTypes.bool,
  large: React.PropTypes.bool,
  small: React.PropTypes.bool,
  primary: React.PropTypes.bool,
  danger: React.PropTypes.bool,
  secondary: React.PropTypes.bool,
  pillLeft: React.PropTypes.bool,
  pillRight: React.PropTypes.bool,
  block: React.PropTypes.bool,
  backgroundColor: React.PropTypes.string,
  borderColor: React.PropTypes.string,
  color: React.PropTypes.string,
  icon: React.PropTypes.string,
  image: React.PropTypes.string,
  caption: React.PropTypes.string,
  onClickButton: React.PropTypes.func,
  hint: React.PropTypes.string,
  hintPosition: React.PropTypes.string,
  hintSize: React.PropTypes.string   
};

AnterosDropdownButton.defaultProps = {
  oval: false,
  success: false,
  large: false,
  small: false,
  primary: false,
  danger: false,
  secondary: false,
  pillLeft: false,
  pillRight: false,
  block: false,
  backgroundColor: undefined,
  borderColor: undefined,
  color: undefined,
  icon: undefined,
  image: undefined,
  caption: undefined
};

