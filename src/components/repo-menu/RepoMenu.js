import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button.js';
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
      <h3>APPLICATIONS ON GITHUB</h3>
      <div className='repoMenu'>
        {Object.keys(props.repositoryList).map(repo => {
          let repository = props.repositoryList[repo];
          return (
            <div className='repoMenu-item' key={repo}>
              <div className='item-header'>
                <p className='repoText'>
                  {repository.name} 
                </p>
                <p>Created: <span className='repoText'>
                     { repository.createdAt}
                  </span>
                </p>
              </div>
              <div className='description'>
                <p className='repoText'>{repository.description} </p>
              </div>
              <div className='item-footer'>
                <Button 
                  clickEvent={(e) => visitURL(repository.githubURL)}
                  purpose='sourceCode'
                  text='Click to view source code'
                  />
                 
                 <LanguageIcons 
                  languages = {formatLanguages(repository.language)} 
                  currentProject ={repository.name}
                  purpose = "Language " />
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
  repositoryList: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
}

export default RepoMenu;