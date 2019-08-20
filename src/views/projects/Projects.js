import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Projects.css';

import Card from '../../components/card/Card.js';
import LanguageChart from '../../components/language-chart/LanguageChart.js';
import RepoMenu from '../../components/repo-menu/RepoMenu.js';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // projectToView: null,
      repositories: null,
    };
    this.viewGHReadMe = this.viewGHReadMe.bind(this);
  }

  componentWillUpdate(){
    if(this.state.repositories === null) {
      this.setState({repositories: this.props.repositories})
    }
  }

  viewGHReadMe(names){
    console.log('viewGHReadMe', this.props.personalProjects.initialState.personalProjects)
  }

  render() {
    return (
      <div className='project-wrapper'>
        <div className='project-header'>
          <h1>Always Building</h1>
        </div>
     
        <div className='project-body'>
          <div className='body-menu-panel'>
            
            <div className='text-container'>
              <p>I love to code. There's just something about the logical creativity needed to create web applications that excites me.</p>
              <br />
              <p>Here you can find the body of my work from 2018 to present.</p>
              <br />
              <p>I primarily write in C# or JavaScript, but I have experience working with some PHP as well.</p>
              <br />
              <p>My projects are tailored to the specific needs of each client, and I enjoy the collaborative effort that brings code to life.</p>
              <p>Essentially I design, build, and maintain meaningful web applications that are easy to use.</p>
            </div>
            
            <div className='pieChart-container'>
              <LanguageChart 
                repositoryList={this.props.repositories} 
                />
            </div>

          </div>



          <div className='body-project-panel'>
     
            <Card repositoryList={this.props.personalProjects.initialState}  />
            {/* <p>        the only thing a gambler needs is a suitcase and a trunk
        and the only time he's satisfied is when he's drunk.
        He fills his glasses up to the brim and he'll place the cards around.
        The only pleasure he gets out of life is ramblin from town to town.</p> */}
          <RepoMenu 
            repositoryList={this.props.repositories} 
            getReadMe = {this.viewGHReadMe}
            />
            
          </div>
        </div>
      </div>
    )
  }
}

Projects.propTypes = {
  repositories: PropTypes.array,
  // countedLanguages: PropTypes.object
}

const mapStateToProps = state => {
  return {
    repositories: state.gitHubRepositories,
    personalProjects: state.personalProjects
  }
}

export default connect(mapStateToProps)(Projects);
