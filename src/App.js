import React from 'react';
// STYLES
import './App.css';
import MenuButton from './assets/images/menu.png';
// COMPONENTS
import Sidebar from './components/Sidebar';
import Home from './views/home/Home.js';
// MIDDLEWARE
import {Switch, Route, withRouter} from 'react-router-dom';
import sidebar from './components/Sidebar';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      sidebar_visible: false,
    };
    this.handleViewSidebar = this.handleViewSidebar.bind(this)
  }

  handleViewSidebar() {
    this.setState(state => ({
      sidebar_visible: !state.sidebar_visible
    }));
  }

  render() {
    let showSidebar = null;
    (this.state.sidebar_visible) ? showSidebar = <Sidebar className='sidebar' /> : showSidebar =null;


    return (
        <div className="App">
          <img src={MenuButton} alt='menuButton' className='menu_icon' id='menuButton' onClick={this.handleViewSidebar}/>
          <div className='container'>
          
            {showSidebar}
          
            <div className='views'>
            <Switch>
              <Route exact path ='/' component = {Home} />
            </Switch>
            </div>
          </div>
        </div>
    );
  }
}

export default withRouter(App);
