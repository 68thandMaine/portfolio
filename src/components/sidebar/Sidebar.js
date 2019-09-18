import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Button from '../button/button.js';


function sidebar(props) {

  return (
    <div className='sidebar'>
      <nav className='sidebar_nav'>
      <Button 
        text='X'
        purpose='closeSidebarButton'
        clickEvent={props.closeMenu}
        testingId = 'closeSidebarButton' />
      <h1 className='mobileMenu'>MENU</h1>
        <ul className='sidebarMenu'> 
          <li className='sidebarLinkWrapper' onClick={(e) => props.changeBackground('/', e)}><Link className='sidebarLink' to ='/' >Home</Link></li>
          <li className='sidebarLinkWrapper' onClick={(e) => props.changeBackground('/bio', e)}><Link className='sidebarLink' to='/bio' >About Me</Link></li>
          <li className='sidebarLinkWrapper' onClick={(e) => props.changeBackground('/projects',e)}><Link className='sidebarLink' to ='/projects' >Work</Link></li>
          <li className='sidebarLinkWrapper' onClick={(e) => props.changeBackground('/contact', e)}><Link className='sidebarLink' to='/contact' >Contact</Link></li>
          <li className='mobileCloseButton'>
            <Button 
              text='close'
              purpose='mobileCloseSidebarButton'
              clickEvent={props.closeMenu}
              testingId = 'mobileCloseSidebarButton' />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default sidebar;