import React from 'react';
import './About.css';
import AboutBody from '../../components/about/AboutBody.js';
import LinkBar from '../../components/about/LinkBar.js';
import TextAnimation from '../../components/about/TextAnimation.js';
import Button from '../../components/button/button.js';
import PictureFrame from '../../components/about/PictureFrame.js';
<<<<<<< HEAD
import Button from '../../components/button/button.js';
=======
import PageHeader from '../../components/page-header/PageHeader.js';
>>>>>>> develop

function About() {

  return (
    <div className='about-wrapper' data-cy='about-view'>
      <div className='aboutHeader'>
        <PageHeader
          title='WELCOME TO MY LITTLE CORNER OF THE INTERNET'
          />
      </div>
<<<<<<< HEAD
      <div className='about-body'>
        <div className='about-body-content'>
          <div className='about-body-pictureFrame'>
            <PictureFrame />
            <Button text='Download Resume' purpose='redirect'/>
=======
      <div className='aboutBody-container'>
        <div className='bodyIntro'>
          <div className='introWord'>
            <h3>I'M</h3>
          </div>
          <div className='introPicture'>
            <div className='picture-wrapper'>
              <PictureFrame />
            </div>
          </div>
          <div className='introWord'>
            <h3>A</h3>
          </div>
        </div>
        <div className='textAnimation'>
          <p><TextAnimation/></p> 
        </div>
        <div className ='bodyContent'>
          <div className='bodyContentGreeting'>
            <p>living in</p>
            <h1 className='portlandText'>portland <span>oregon</span></h1>
          </div>
          <div className='body'>
            <div className='bodyLinks'>
              <h4>Check me out online</h4>
              <LinkBar 
                />
              <h4>oR</h4>
              <Button 
              text='DOWNLOAD MY RESUME'
              purpose='redirect'/>
            </div>
            <div className='bodyText'>
              <AboutBody />
            </div>
>>>>>>> develop
          </div>
        </div>
      </div>
    </div>
  )
}
export default About;