import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Projects.css';

import LanguageChart from '../../components/language-chart/LanguageChart.js';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectToView: null,
      repositories: null
    };
    this.testButton = this.testButton.bind(this);
  }


  testButton() {    
  }

  render() {
    return (
      <div className='project-wrapper'>
        <div className='project-header'>
          <h1>my work</h1>
          <button onClick={this.testButton}>Get Repos</button>
          <p>I will need a a title, a short description, and perhaps an image/video to play on mouseover?</p>
          <p>What styles should I consider?</p>
          <p>It seems that I might want the proejct component to be comprosed of the following child components:</p>
          <ul>
            <li>Card component to hold the basic info for each project</li>
            <li>Modal component to open when a project is clicked on</li>
            <li>Project description component to be displayed within the modal as well.</li>
          </ul>
          <LanguageChart 
            sortedLanguages={this.props.repositories} 
            />
        </div>
        <div className='project-body'>
          <div className='body-menu-panel'>
            <h6>Put project names in here that can be clicked on </h6>
            <h6>Eleno-r</h6>
            <h6>Mission-Control</h6>
            <h6>Elenor-Server</h6>
            <h6>Tumbleweed Bakehouse</h6>
            <h6>Hypetown</h6>
            <h6>Bikeindex?</h6>
          </div>
          <div className='body-project-panel'>
            <h5>Before a project is selected have a text displayed about what the project page is about.</h5>
            <h6>Then when a project is selected we can display the contents here.</h6>
          </div>
        </div>
      </div>
    )
  }
}

Projects.propTypes = {
  repositories: PropTypes.array,
  countedLanguages: PropTypes.object
}

const mapStateToProps = state => {
  return {
    repositories: state.projects,
  }
}

export default connect(mapStateToProps)(Projects);
