import React from 'react';
import './Home.css';


function Home() {
  return (
    <div>
    <div className='home-view' data-cy='home-view'></div>
        <div className='home-container'>
        <div className='home-header'>
          <h1>HEL~ LO</h1>
        </div>
        <div className='home-content'>
          <h3>My name is Chris</h3>
          <h4>And I'm a developer</h4>
        </div>

      </div>
    </div>
  )
}

export default Home;