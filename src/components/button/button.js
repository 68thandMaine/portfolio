import React from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import './button.css';


class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toResume: false,
      submitContact: false, //For the contact/message feature
    };
    this.viewResume = this.viewResume.bind(this);
  }
  viewResume(){
    this.setState({toResume: true});
  }
    render () {
      if(this.state.toResume === true) {
        return <Redirect to = '/resume' /> ;
      }
      return (
        <button onClick={this.viewResume} className={this.props.purpose}>{this.props.text}</button>
      )
    }
}

Button.propTypes = {
  text: PropTypes.string,
  purpose: PropTypes.string
}

export default Button;