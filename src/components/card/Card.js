import React from 'react';
import PropTypes from 'prop-types';
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
        <div className='row'>
          {Object.keys(this.props.repositoryList.personalProjects).map(repo => {
            let project = this.props.repositoryList.personalProjects[repo];
            return (
              <div className='grid-item-wrapper' key={repo}>
                <div className='grid-item-container'>
                <div className='card'>
                  <p>{project.name}</p>
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