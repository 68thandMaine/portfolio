import React from 'react';
import './LinkBar.css';

function Linkbar () {
  return (
    <nav>
      <ul className='linkbar-container'>
        <a className='icon' alt='link to github' href='https://www.github.com/69thandMaine'></a>
        <a className='icon' alt='follow me on linkedin' href='https://www.linkedin.com/in/crudnicky'></a>
        <a className='icon' alt='follow me on instagram' href='https://www.instagram.com/virginiathekid'></a>
      </ul>
    </nav>
  )
}

export default Linkbar;