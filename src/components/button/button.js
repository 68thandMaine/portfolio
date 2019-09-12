import React from 'react';
<<<<<<< HEAD
import {Redirect} from 'react-router-dom';
=======
>>>>>>> develop
import PropTypes from 'prop-types';
import './button.css';


<<<<<<< HEAD
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
=======
const Button = (props) => {
  return (
    <button data-cy={props.testingID} className={`button + ${props.purpose}`}
      onClick={props.clickEvent}
      type='button'>
        {props.text}
    </button>
  )
>>>>>>> develop
}

Button.propTypes = {
  text: PropTypes.string,
<<<<<<< HEAD
  purpose: PropTypes.string
=======
  purpose: PropTypes.string, 
  clickEvent: PropTypes.func,
  testingId: PropTypes.string
>>>>>>> develop
}

export default Button;