import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Projects.css';

import Card from '../../components/card/Card.js';
import LanguageChart from '../../components/language-chart/LanguageChart.js';
import LoadingBars from '../../components/loading-bar/LoadingBar';
import PageHeader from '../../components/page-header/PageHeader';
import RepoMenu from '../../components/repo-menu/RepoMenu.js';

function Projects(props) {
  useEffect(() => {
    viewToShow();
  });

  function viewToShow() {
    let repositories = Object.entries(props.repositories);
    if(repositories.length === 0) {
      return <LoadingBars />
    } else 
    return  <LanguageChart repositoryList={props.repositories} />
  }

  return (
    <div className='project-wrapper'>
      <div className='project-header'>
        <PageHeader
        title='ALWAYS BUILDING'
        />
      </div>
      <div className='project-body'>
        <div className='body-menu-panel'>
          <div className='text-container'>
            <div className='intro'>
              <h6>He who works with his hands is a <span className='highlightedText'>laborer</span>.</h6>
              <h6>He who works with his hands and his head is a <span className='highlightedText'>craftsman</span>.</h6>
              <h6>He who works with his hands and his head and his heart is an <span className='highlightedText'>artist</span>.</h6>
              <h6> - Francis of Assisi</h6>
            </div>
            <p>I love to code. There's just something about the logical creativity needed to create web applications that excites me. Here you can find the body of my work from 2018 to present. As I am early in my career much of my work is still in development – however I invite you to visit any project's repository below to view the source code and ReadMe.</p>
        
            <p>I believe that web applications should be performant, purposeful, and aesthetically pleasing. My current focus is on responsive design, SASS, CI/CD pipelines, performance, and accessibility as I believe that these should be some of the core competencies of a modern frontend developer.</p>

          </div>
          {viewToShow()}
        </div>
        <div className='body-project-panel'>
          <Card 
            repositoryList={props.personalProjects}  
          />
          <RepoMenu 
            repositoryList={props.repositories} 
          />
        </div>
      </div>
    </div>
  )
}

Projects.propTypes = {
  repositories: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  personalProjects: PropTypes.object
}

const mapStateToProps = state => {
  return {
    repositories: state.gitHubRepositories,
    personalProjects: state.personalProjects
  }
}

export default connect(mapStateToProps)(Projects);
