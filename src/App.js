import React from 'react';
// STYLES
import './App.css';
import MenuButton from './assets/images/menu.png';
import HomeBackground from './assets/images/bg.png';
import Error404Background from './assets/images/notfound.png';
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
      background: HomeBackground
    };
    this.handleViewSidebar = this.handleViewSidebar.bind(this)
    this.handleChangeBackground = this.handleChangeBackground.bind(this)
  }


  handleViewSidebar() {
    this.setState(state => ({
      sidebar_visible: !state.sidebar_visible
    }));
  }

  handleChangeBackground(location) {
    console.log(location);
    switch(location) {
      case 'home':
       return this.setState({ background:HomeBackground});
       break;
      case 'bio':
        return this.setState({ background: null});
        break;
      case 'projects':
        return this.setState({ background: null});
        break;
      case 'contact':
        return this.setState({ background: null});
        break;
      default:
        return this.setState({ background: Error404Background});;
    }
}

  render() {
    let showSidebar = null;
    (this.state.sidebar_visible) ? showSidebar = <Sidebar  className='sidebar' changeBackground={this.handleChangeBackground}/> : showSidebar = null;

    return (
      <Router>
        <div className="App">
          <img src={MenuButton} alt='menuButton' className='menu_icon' id='menuButton' onClick={this.handleViewSidebar}/>
          <img src={this.state.background} alt='home background' className='background' />
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
