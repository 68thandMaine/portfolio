import React from 'react';
// STYLES
import './App.css';
import MenuButton from './assets/images/menu.png';
// COMPONENTS
import Sidebar from './components/Sidebar';
import Home from './views/home/Home.js';
// MIDDLEWARE
import {Switch, Route} from 'react-router-dom';

function App() {
    return (
        <div className="App">

            <img src={MenuButton} alt='menuButton' className='menu_icon' id='menuButton' />

          <Sidebar/>
          <Switch>
            <Route exact path ='/' component = {Home} />
          </Switch>
          
        </div>
    );
}

export default App;
