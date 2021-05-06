import React from 'react';
import './styles/CardContent.css';
import PropTypes from 'prop-types';

const CardContent = ({ iconCSS, title, content }) => {
  return (
    <>
      <h3 className="font cardTitle text-center">
        <i className={`${iconCSS} cardIcon me-3`}></i>
        {title}
      </h3>
      <p className="font text-center">{content}</p>
    </>
  );
};

CardContent.propTypes = {
  iconCSS: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default CardContent;
