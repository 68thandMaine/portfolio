import React from 'react';
import PropTypes from 'prop-types';
import LanguageIcons from '../lanuage-icons/LanguageIcons.js';
import './RepoMenu.css';

function RepoMenu(props) {
 
  function visitURL(url){
    window.location.href = url;
  }

  function formatLanguages(language) {
    return [language];
  }

  return (
    <div className='repoMenu-wrapper'>
      <h3>ON GITHUB</h3>
      <div className='repoMenu'>
        {Object.keys(props.repositoryList).map(repo => {
          let repository = props.repositoryList[repo];
          return (
            <div className='repoMenu-item' key={repo} onClick={(e) => props.getReadMe(repository.name, e)}>
              <div className='item-header'>
                <p>{repository.name}</p>
                
                  <p>Created: 
                  <span> {repository.createdAt}</span></p>
                
              </div>
              <div>
                <p>{repository.description} </p>
              </div>
              <div className='item-footer'>
                 <button className='github-btn'onClick={(e) => visitURL(repository.githubURL, e)}>Click to visit the source code</button>
                 <LanguageIcons 
                  languages = {formatLanguages(repository.language)} 
                  currentProject ={repository.name}
                  purpose = "Language: " />
              </div>
            </div>
            );
          })
        }
      </div>
    </div>
  );
}

RepoMenu.propTypes = {
  repositoryList: PropTypes.object,
}

export default RepoMenu;