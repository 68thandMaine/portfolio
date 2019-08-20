import React from 'react';
import PropTypes from 'prop-types';
import './RepoMenu.css';

function RepoMenu(props) {
 
  return (
    <div className='repoMenu-wrapper'>
      {Object.keys(props.repositoryList).map(repo => {
        let repository = props.repositoryList[repo];
        return (
          <div className='repoMenu-item' key={repo}>
            <p onClick={(e) => props.getReadMe(repository.name, e)}>{repository.name}............<span>Wanna see the github for this project?</span></p>
          </div>
        );
      })
    }
    </div>
  );
}

RepoMenu.propTypes = {
  repositoryList: PropTypes.array,
}

export default RepoMenu;