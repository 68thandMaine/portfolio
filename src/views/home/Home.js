import React from 'react';
import './Home.css';
import Background from '../../assets/images/bg.png';

function Home() {
  return (
    <div class='content'>
      <img src={Background} alt='background' class='background' />
    </div>
  )
}

export default Home;