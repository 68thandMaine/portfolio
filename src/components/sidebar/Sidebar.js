import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Button from '../button/button.js';


function sidebar(props) {

  return (
    <div className='sidebar'>
      <nav className='sidebar_nav'  data-cy='sidebar'>
      <Button 
        text='X'
        purpose='closeSidebarButton'
        clickEvent={props.closeMenu}
        testingID = 'closeSidebarButton' />
      <h1 className='mobileMenu' data-cy='mobileMenuHeader'>MENU</h1>
        <ul className='sidebarMenu'> 
          <Link className='sidebarLink' to ='/'  onClick={(e) => props.changeBackground('/', e)} data-cy='homeLink'>Home</Link>
          <Link className='sidebarLink' to='/bio' onClick={(e) => props.changeBackground('/bio', e)} data-cy='bioLink'>About Me</Link>
          <Link className='sidebarLink' to ='/projects' onClick={(e) => props.changeBackground('/projects',e)} data-cy='projectsLink'>Work</Link>
          <Link className='sidebarLink' to='/contact' onClick={(e) => props.changeBackground('/contact', e)} data-cy='contactLink'>Contact</Link>
          <li className='mobileCloseButton'>
            <Button 
              text='close'
              purpose='mobileCloseSidebarButton'
              clickEvent={props.closeMenu}
              testingID = 'mobileCloseSidebarButton' />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default sidebar;