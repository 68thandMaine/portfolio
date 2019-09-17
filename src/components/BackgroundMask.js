import React from 'react';
import PropTypes from 'prop-types';
import './BackgroundMask.css';

class BackgroundMask extends React.Component {
  constructor (props) {
    super(props) 
    this.state={

      }
    }
  componentWillMount(){
    this.props.imgSrc.forEach((src) => {
      const image = document.createElement('img');
      image.src = src; //Assign an image src attribute requests the image
    });
  }
  

  render() {
    const activeImage = this.props.imgSrc[this.props.imgIndex];

   return (
    <img className='background' src ={activeImage} alt='background mask' />
   ); 
  }
}

BackgroundMask.propTypes = {
  imgSrc: PropTypes.array,
  imgIndex: PropTypes.number
}

export default BackgroundMask;