import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function sidebar(props) {

  return (
    <div className='sidebar'>
      <nav className='sidebar_nav'>
      <h1 className='mobileMenu'>MENU</h1>
        <ul className='sidebarMenu'> 
          <li className='sidebarLinkWrapper' onClick={(e) => props.changeBackground('/', e)}><Link className='sidebarLink' to ='/' >Home</Link></li>
          <li className='sidebarLinkWrapper' onClick={(e) => props.changeBackground('/bio', e)}><Link className='sidebarLink' to='/bio' >About Me</Link></li>
          <li className='sidebarLinkWrapper' onClick={(e) => props.changeBackground('/projects',e)}><Link className='sidebarLink' to ='/projects' >Work</Link></li>
          <li className='sidebarLinkWrapper' onClick={(e) => props.changeBackground('/contact', e)}><Link className='sidebarLink' to='/contact' >Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default sidebar;