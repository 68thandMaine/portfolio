import React from 'react';
// STYLES
import './App.css';
import MenuButton from './assets/images/menu.png';
import HomeBackground from './assets/images/HomeBG.png';
import Error404Background from './assets/images/notfound.png';
import BioBackground from './assets/images/AboutBG.png';
import { images } from './assets/images/images';


// COMPONENTS
import BackgroundMask from './components/BackgroundMask';
import Sidebar from './components/sidebar/Sidebar';

// Routes
import Views from './routes/Routes';
import { BrowserRouter as Router } from "react-router-dom";



class App extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      sidebar_visible: false,
      background: 0,
    };
    this.handleViewSidebar = this.handleViewSidebar.bind(this)
    this.handleChangeBackground = this.handleChangeBackground.bind(this)
  }


  handleViewSidebar() {
    console.log(images[1])
    this.setState(state => ({
      sidebar_visible: !state.sidebar_visible
    }));
  }

  handleChangeBackground(location) {
    console.log(location);
    switch(location) {
      case 'home':
       return this.setState({ background:0, sidebar_visible: false});
       
      case 'bio':
        return this.setState({ background: 1, sidebar_visible: false});
       
      case 'projects':
        return this.setState({ background: null, sidebar_visible: false});
       
      case 'contact':
        return this.setState({ background: null, sidebar_visible: false});
       
      default:
        return this.setState({ background: 2, sidebar_visible: false});
    }
}

  render() {
    let showSidebar = null;
    (this.state.sidebar_visible) ? showSidebar = <Sidebar  className='sidebar' changeBackground={this.handleChangeBackground}/> : showSidebar = null;

    return (
      <Router>
        <div className="App">
          <img src={MenuButton} alt='menuButton' className='menu_icon' id='menuButton' onClick={this.handleViewSidebar}/>
          {/* <img src={this.state.background} alt='home background' className='background' /> */}
          <BackgroundMask 
            imgIndex={this.state.background}
            imgSrc={images}/> 
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
