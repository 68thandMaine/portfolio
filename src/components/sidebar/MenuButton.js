import React from 'react';
import PropTypes from 'prop-types';
import './MenuButton.css';

const MenuButton = (props) => {
  return (
    <div className='menuButtonWrapper' onClick={props.openMenu}>
      
        <div className='col'></div>
        <div className='col'>M</div>
        <div className='col'></div>
      
        <div className='col'>E</div>
        <div className='col'></div>
        <div className='col'>N</div>
      
        <div className='col'></div>
        <div className='col'>U</div>
        <div className='col'></div>
      
    </div>
  )
}

MenuButton.propTypes = {
  openMenu: PropTypes.func,
}

export default MenuButton;