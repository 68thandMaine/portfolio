import React from 'react';
import PropTypes from 'prop-types';
import './Arrows.css';

function Arrows(props) {

  function closeArrows() {
    let arrow = document.querySelector('#arrowAnim');
    arrow.classList.add('fadeOut');
    setTimeout(() => {
      props.showForm();
    }, 600);
  }

  return (
    <div id="arrowAnim" onClick={(e) => closeArrows()}>
      <div className="arrowSliding">
        <div className="arrow"></div>
      </div>
      <div className="arrowSliding delay1">
        <div className="arrow"></div>
      </div>
      <div className="arrowSliding delay2">
        <div className="arrow"></div>
      </div>
    </div>
  );
}

Arrows.propTypes = {
  showForm: PropTypes.func.isRequired
}

export default Arrows;