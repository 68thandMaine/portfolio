import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function sidebar() {

  return (
    <aside className='sidebar'>
      <nav className='sidebar_nav'>
        <ul> 
          <li><Link to ='/'>Home</Link></li>
          <li><Link to='/bio'>About Me</Link></li>
          <li><a href='./'>Work</a></li>
          <li><a href='./'>Contact</a></li>
        </ul>
      </nav>
    </aside>
  )
}

export default sidebar;