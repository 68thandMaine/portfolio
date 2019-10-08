import React from 'react';
import { connect} from 'react-redux';
// STYLES
import './App.css';
import { images } from './assets/images/images';

// COMPONENTS
import BackgroundMask from './components/BackgroundMask';
import MenuButton from './components/sidebar/MenuButton';
import Sidebar from './components/sidebar/Sidebar';

// Routes
import Views from './routes/Routes';
import { BrowserRouter as Router } from "react-router-dom";

// STATE
import { getRepos, receivePersonalProjects } from './actions';


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
    this.props.dispatch((receivePersonalProjects()));
    this.handleChangeBackground(window.location.pathname);
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
    (this.state.sidebar_visible) ? showSidebar = <Sidebar  className='sidebar' closeMenu ={this.handleViewSidebar} changeBackground={this.handleChangeBackground}/> : showSidebar = null;
    let showMenuButton = null;
    (this.state.sidebar_visible) ? showMenuButton = null: showSidebar =  <MenuButton openMenu={this.handleViewSidebar} />;



    return (
      <Router>
        <div className="App">
        
         {showMenuButton}
          
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


export default connect()(App);
