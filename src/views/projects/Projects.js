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
            <p>I love to code. There\'s just something about the logical creativity needed to create web applications that excites me.</p>
            <br />
            <p>Here you can find the body of my work from 2018 to present.</p>
            <br />
            <p>I primarily write in C# or JavaScript, but I have experience working with some PHP as well.</p>
            <br />
            <p>My projects are tailored to the specific needs of each client, and I enjoy the collaborative effort that brings code to life.</p>
            <p>Essentially I design, build, and maintain meaningful web applications that are easy to use.</p>
          </div>
          {viewToShow()}
        </div>
        <div className='body-project-panel'>
          <Card 
            repositoryList={props.personalProjects}  
          />

        <RepoMenu 
          repositoryList={props.repositories} 
        />s
          
        </div>
      </div>
    </div>
  )
}

Projects.propTypes = {
  repositories: PropTypes.array,
  // countedLanguages: PropTypes.object
}

const mapStateToProps = state => {
  return {
    repositories: state.gitHubRepositories,
    personalProjects: state.personalProjects.initialState
  }
}

export default connect(mapStateToProps)(Projects);
