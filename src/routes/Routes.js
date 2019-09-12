import React from 'react';
import {Switch, Route, withRouter, Router} from 'react-router-dom';
// COMPONENTS
import About from '../views/about/About.js';
import Contact from '../views/contact/Contact.js';
import Error404 from '../views/error/Error404.js';
import Home from '../views/home/Home.js';
import PdFViewer from '../views/pdf-viewer/PDFViewer.js';
import Projects from '../views/projects/Projects.js';
import PDFJSBackend from '../services/Pdf.js';
// ROUTING TRANSITION
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './route-transitions.css';

function Routes({location, history}) {
    return (
      <div className='route-container'>
        <TransitionGroup className='transition-group'>
          <CSSTransition
            key={location.key}
            timeout={{ enter: 900, exit: 300 }}
            classNames={'fade'} >
              <div className='route-section'>
                <Router history={history} >
                  <Switch location={location}>
                      <Route exact path='/' component={Home}/>
                      <Route path='/bio' component={About}/>
                      <Route path='/resume' render={(props) => <PdFViewer backend={PDFJSBackend} src='/DevRes.pdf'/> } />
                      <Route path='/projects' component={Projects} />
                      <Route path='/contact' component={Contact} />
                      <Route component={Error404} />
                  </Switch>
                </Router>
              </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
}

export default withRouter(Routes);