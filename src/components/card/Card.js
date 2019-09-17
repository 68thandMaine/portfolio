import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button.js';
import LanguageIcons from '../lanuage-icons/LanguageIcons.js';
import ProgressBar from '../progress-bar/progressBar.js';
import './Card.css';

function Card(props) {

    function enlargeGHIcon(projectName) {
        let icon = document.getElementById(`ghIcon_${projectName}`);
        icon
            .classList
            .remove('shrinkIcon');
        icon
            .classList
            .add('enlargeIcon');
    }
    function shrinkGHIcon(projectName) {
        let icon = document.getElementById(`ghIcon_${projectName}`);
        icon.classList.remove('enlargeIcon');
        icon.classList.add('shrinkIcon');
    }
    function enlargeReadMeIcon(projectName) {
        let icon = document.getElementById(`readMeIcon_${projectName}`);
        icon.classList.remove('shrinkIcon');
        icon.classList.add('enlargeIcon');
    }
    function shrinkReadMeIcon(projectName) {
        let icon = document.getElementById(`readMeIcon_${projectName}`);
        icon
            .classList
            .remove('enlargeIcon');
        icon
            .classList
            .add('shrinkIcon');
    }
    function goTo(location) {
      window.location = location;
    } 
    return (
        <div className='card-wrapper'>
            <h3>APPLICATIONS IN DEVELOPMENT</h3>
            <div className='row'>

                {Object
                    .keys(props.repositoryList.personalProjects)
                    .map(repo => {
                        let project = props.repositoryList.personalProjects[repo];
                        let technologies = project.languages

                        return (
                            <div className='grid-item-wrapper' key={repo}>

                                <div className='card'>
                                    <h4>{project.name}</h4>
                                    <p>{project.description}</p>
                                    <ProgressBar percentage={project.percentComplete}/>
                                    <div className='card-footer'>
                                        <div className='personalProjects'>
                                            <h6>CHECK THE CODE</h6>
                                            <div className='footer-links'>
                                                <div className='projectLinks'>
                                                    <i id={`readMeIcon_${project.name}`} className="fab fa-readme fa-2x"/>
                                                    <div onMouseEnter={()=>enlargeReadMeIcon(project.name)} onMouseLeave={()=>shrinkReadMeIcon(project.name)}>
                                                        <Button
                                                            text='Readme'
                                                            purpose='projectLinkButton'
                                                            clickEvent={()=>goTo(project.readMeURL)}
                                                            />
                                                    </div>
                                                </div>
                                                <div className='projectLinks'>
                                                    <i id={`ghIcon_${project.name}`} className='fab fa-github fa-2x'/>
                                                    <div onMouseEnter={()=>enlargeGHIcon(project.name)} onMouseLeave={()=>shrinkGHIcon(project.name)}>
                                                        <Button text='Github' purpose='projectLinkButton' clickEvent={()=>goTo(project.githubURL)}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='footer-languages'>
                                            <LanguageIcons
                                                currentProject={project.name}
                                                languages={technologies}
                                                purpose='Environment'/>
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

Card.propTypes = {
    repositoryList: PropTypes.object
}

export default Card;