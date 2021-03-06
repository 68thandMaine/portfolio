import React from 'react';
import PropTypes from 'prop-types';
import './PageHeader.css';

const PageHeader = (props) => {

  return (
    <h1 data-cy='pageHeader'>{props.title}</h1>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageHeader;