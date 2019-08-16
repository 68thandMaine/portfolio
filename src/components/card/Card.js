import React from 'react';
import PropTypes from 'prop-types';
import LanguageIcons from '../lanuage-icons/LanguageIcons.js';
import ProgressBar from '../progress-bar/progressBar.js';
import './Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
   
    };
  };
  
  
  render() {
    return (
      <div className='card-wrapper'>
        <h3>IN DEVELOPMENT</h3>
        <div className='row'>
          
          {Object.keys(this.props.repositoryList.personalProjects).map(repo => {
            let project = this.props.repositoryList.personalProjects[repo];
            let technologies = project.languages
            console.table('technologies', technologies, 'repo', repo);
            
            return (
              <div className='grid-item-wrapper' key={repo}>
                
                  <div className='card' >
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                    <ProgressBar percentage={project.percentComplete}/>
                    <div className='card-footer'>
                      <div className='personalProjects'>    
                        <h6>CHECK THE CODE</h6>
                        <div className='footer-links'>
                          <div className='projectLinks'>
                            <a href={project.readMeURL}><i className="fab fa-readme fa-2x" /></a>
                            <label className='linkLabel'>Readme</label>
                          </div>
                          <div className='projectLinks'>
                            <a href={project.githubURL}><i className='fab fa-github fa-2x' /></a>
                            <label className='linkLabel'>Github</label>
                          </div>
                        </div>
                      </div>
                      <div className='footer-languages'> 
                        <LanguageIcons 
                        currentProject = {project.name}
                        languages={technologies}
                        purpose='Environment' />
                      </div>
                    </div>
                  </div>
              
              </div>
            )

         })}

       </div>
      </div>
    );
  }
}

Card.propTypes = {
  repositoryList: PropTypes.array
}

export default Card;