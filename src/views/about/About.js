import React from 'react';
import {withRouter} from 'react-router-dom';
import './About.css';
import AboutBody from '../../components/about/AboutBody.js';
import LinkBar from '../../components/about/LinkBar.js';
import TextAnimation from '../../components/about/TextAnimation.js';
import Button from '../../components/button/button.js';
import PictureFrame from '../../components/about/PictureFrame.js';
import PageHeader from '../../components/page-header/PageHeader.js';

function About(props) {

  function handleViewResume() {
    props.history.push('/resume');
  }

  return (
    <div className='about-wrapper' data-cy='about-view'>
      <div className='aboutHeader'>
        <PageHeader
          title='WELCOME TO MY LITTLE CORNER OF THE INTERNET'
          />
      </div>
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
              purpose='redirect'
              clickEvent={(e) => handleViewResume()}
              />
            </div>
            <div className='bodyText'>
              <AboutBody />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default withRouter(About);