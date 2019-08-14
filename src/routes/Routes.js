import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
// COMPONENTS
import Home from '../views/home/Home.js';
import About from '../views/about/About.js';
import Error404 from '../views/error/Error404.js';
import PdFViewer from '../views/pdf-viewer/PDFViewer.js';
import PDFJSBackend from '../services/Pdf.js';
// ROUTING TRANSITION
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './route-transitions.css';


function Routes({location}) {
    return (
      <div className='route-container'>
        <TransitionGroup className='transition-group'>
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames={'fade'} >
              <div className='route-section'>
                <Switch location={location}>
                    <Route exact path='/' component={Home}/>
                    <Route path='/bio' component={About}/>
                    <Route path='/resume' render={(props) => <PdFViewer backend={PDFJSBackend} src='/resume.pdf'/> } />
                    <Route component={Error404} />
                </Switch>
              </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
}

export default withRouter(Routes);