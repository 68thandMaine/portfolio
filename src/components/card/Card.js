import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../progress-bar/progressBar.js';
import './Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state= {

    };
  }
  componentDidMount(){
    console.log('card props', this.props.repositoryList)
  }
  
  render() {
    return (
      <div className='card-wrapper'>
        <h5>In Development</h5>
        <div className='row'>
          {Object.keys(this.props.repositoryList.personalProjects).map(repo => {
            let project = this.props.repositoryList.personalProjects[repo];
            return (
              <div className='grid-item-wrapper' key={repo}>
                
                  <div className='card'>
                    <p>{project.name}</p>
                    <p>{project.description}</p>
                    <ProgressBar percentage={project.percentComplete}/>
                    <div className='card-footer'>
                      <div className='footer-links' >
                        <a href={project.readMeURL}><i className="fab fa-readme fa-2x" />Readme</a>
                        <a href={project.githubURL}><i className='fab fa-github fa-2x' /> Github</a>
                      </div>
                      <p>{project.languages.join(' ')}</p>
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