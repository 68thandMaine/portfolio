import React from 'react';
import './PDFViewer.css';
// import {Resume} from '../../assets/resume/resume.pdf';

class PDFViewer extends React.Component {
  constructor (props) {
    super(props);
   this.viewerRef = React.createRef();
   this.backend = new props.backend();
}
componentDidMount() {
  const { src } = this.props;
  const element = this.viewerRef.current;

  this.backend.init(src, element);
}
  render() {
    return (
      <div ref ={this.viewerRef} className='pdfViewer-container' data-cy='pdfViewer'>
        
      </div>
    )
  }
}

export default PDFViewer;