import React from 'react';
import './Sidebar.css';

function sidebar() {

  return (
    <aside className='sidebar'>
      <nav className='sidebar_nav'>
        <ul> 
          <li><a className='active' href='./'>Home</a></li>
          <li><a href='./'>About Me</a></li>
          <li><a href='./'>Work</a></li>
          <li><a href='./'>Contact</a></li>
        </ul>
      </nav>
    </aside>
  )
}

export default sidebar;