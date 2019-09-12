import React from 'react';
import { connect} from 'react-redux';
// STYLES
import './App.css';
import MenuButton from './assets/images/menu.png';
import { images } from './assets/images/images';

// COMPONENTS
import BackgroundMask from './components/BackgroundMask';
import Sidebar from './components/sidebar/Sidebar';

// Routes
import Views from './routes/Routes';
import { BrowserRouter as Router } from "react-router-dom";

// STATE
import { getRepos } from './actions';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      background: 0,
      sidebar_visible: false,
    };
    this.handleViewSidebar = this.handleViewSidebar.bind(this);
    this.handleChangeBackground = this.handleChangeBackground.bind(this);
  }
  
  componentDidMount() {
    this.props.dispatch((getRepos()));
    this.handleChangeBackground(window.location.pathname)
  }

  handleViewSidebar() {
    this.setState(state => ({
      sidebar_visible: !state.sidebar_visible
    }));
  }


  handleChangeBackground(location) {
    switch(location) {
      case '/':
       return this.setState({ background:0, sidebar_visible: false});
       
      case '/bio':
        return this.setState({ background: 1, sidebar_visible: false});
       
      case '/projects':
        return this.setState({ background: 2, sidebar_visible: false});
       
      case '/contact':
        return this.setState({ background: 3, sidebar_visible: false});
       
      default:
        return this.setState({ background: 3, sidebar_visible: false});
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
              {/* <h5>Make sure you check everything before deploying!</h5> */}
              <Views />
            </div>
          </div>
        </div>
        </Router>
    );
  }
}


export default connect()(App);
