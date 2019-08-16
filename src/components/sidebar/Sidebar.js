import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function sidebar(props) {

  return (
    <div className='sidebar'>
      <nav className='sidebar_nav'>
        <ul> 
          <li onClick={(e) => props.changeBackground('home', e)}><Link to ='/' >Home</Link></li>
          <li onClick={(e) => props.changeBackground('bio', e)}><Link to='/bio' >About Me</Link></li>
          <li onClick={(e) => props.changeBackground('projects',e)}><Link to ='/projects' >Work</Link></li>
          <li onClick={(e) => props.changeBackground('contact', e)}><a href='./' >Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default sidebar;