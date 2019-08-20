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
      <div>
        {Object.keys(this.props.repositoryList.personalProjects).map(repo => {
          console.log('repo', repo)
          let repository = this.props.repositoryList.personalProjects[repo];
          console.log(repository)
          return (
            <div className='card-wrapper'>
            <div className='card-title'>
              <p>{repository.name}</p>
              </div>
            <div className='card-body'>
              <p>{repository.languages}</p>
              <p>{repository.description}</p>
            </div>
            </div>
          )
        })}
        <div className='card-title'>Oh tell my baby sister not to do what I've done</div>
      </div>
    );
  }
}

Card.propTypes = {
  repositoryList: PropTypes.array
}

export default Card;