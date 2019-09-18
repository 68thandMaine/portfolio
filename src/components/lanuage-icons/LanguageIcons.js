import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './LanguageIcons.css';
import {icons} from '../../assets/icons/icons.js';

const LanguageIcons = (props) => {
  useEffect(()=>{
    let languages = props.languages;
    for( let i = 0; i < languages.length; i++ ) {
      if(languages[i] === "Angular") {
        let angularIcon = document.createElement("IMG");
        angularIcon.src=icons[0];
        angularIcon.className = 'languageIcon';
        document.getElementById(props.currentProject).append(angularIcon);
      } else if(languages[i] === "C#") {
        let csharpIcon = document.createElement("IMG");
        csharpIcon.src=icons[1];
        csharpIcon.className = 'languageIcon';
        document.getElementById(props.currentProject).append(csharpIcon);
      } else if(languages[i] === "Cypress") {
        let cypressIcon = document.createElement("IMG");
        cypressIcon.src=icons[2];
        cypressIcon.className = 'languageIcon';
        document.getElementById(props.currentProject).append(cypressIcon);
      } else if(languages[i] === "Firebase") {
        let firebaseIcon = document.createElement("IMG");
        firebaseIcon.src=icons[3];
        firebaseIcon.className = 'languageIcon';
        document.getElementById(props.currentProject).append(firebaseIcon);
      } else if(languages[i] === "HTML") {
          let htmlIcon = document.createElement("IMG");
          htmlIcon.src=icons[4];
          htmlIcon.className = 'languageIcon';
          document.getElementById(props.currentProject).append(htmlIcon);
      } else if(languages[i] === "JavaScript") {
        let javaScriptIcon = document.createElement("IMG");
        javaScriptIcon.src=icons[5];
        javaScriptIcon.className = 'languageIcon';
        document.getElementById(props.currentProject).append(javaScriptIcon);
      } else if(languages[i] === "SQL") {
        let mySQLIcon = document.createElement("IMG");
        mySQLIcon.src=icons[6];
        mySQLIcon.className = 'languageIcon';
        document.getElementById(props.currentProject).append(mySQLIcon);
      } else if(languages[i] === "React") {
        let reactIcon = document.createElement("IMG");
        reactIcon.src=icons[7];
        reactIcon.className = 'languageIcon';
        document.getElementById(props.currentProject).append(reactIcon);
      } else if(languages[i] === "TypeScript") {
        let typeScriptIcon = document.createElement("IMG");
        typeScriptIcon.src=icons[8];
        typeScriptIcon.className = 'languageIcon';
        document.getElementById(props.currentProject).append(typeScriptIcon);
      } else if(languages[i] === "Vue") {
        let vueIcon = document.createElement("IMG");
        vueIcon.src=icons[9];
        vueIcon.className = 'languageIcon';
        document.getElementById(props.currentProject).append(vueIcon);
      }
    }
  }, []);

    return (
      <div className='languageIconWrapper' >
        <h6>{props.purpose}</h6>
        <div className='languageIcons' id={props.currentProject}>

        </div>
      </div>
    );
  }

LanguageIcons.propTypes = {
  languages: PropTypes.array.isRequired,
  currentProject: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
}

export default LanguageIcons;