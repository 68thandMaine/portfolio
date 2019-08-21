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
                    <p>{project.languages.join(' ')}</p>
                    <a href={project.readMeURL}>Readme</a>
                    <a href={project.githubURL}>Github</a>
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