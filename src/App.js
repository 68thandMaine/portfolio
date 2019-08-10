import React from 'react';
// STYLES
import './App.css';
import MenuButton from './assets/images/menu.png';
// COMPONENTS
import Sidebar from './components/Sidebar';

// Routes
import Views from './routes/Routes';
import { BrowserRouter as Router } from "react-router-dom";



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
      <Router>
        <div className="App">
          <img src={MenuButton} alt='menuButton' className='menu_icon' id='menuButton' onClick={this.handleViewSidebar}/>
          <div className='container'>
          
            {showSidebar}
          
            <div className='views'>
              <Views />
            </div>
          </div>
        </div>
        </Router>
    );
  }
}

export default App;
