import React from 'react';
import PropTypes from 'prop-types';
import './styles/SocialBar.css';

const SocialBar = ({ urlLinkedIn, urlTwitter, urlGithub }) => {
  return (
    <div className="teamFont socialBar">
      <a href={urlLinkedIn}>
        <i className="fab fa-linkedin"></i>
      </a>
      <a href={urlTwitter}>
        <i className="fab fa-twitter-square"></i>
      </a>
      <a href={urlGithub}>
        <i className="fab fa-github"></i>
      </a>
    </div>
  );
};

SocialBar.propTypes = {
  urlLinkedIn: PropTypes.string,
  urlTwitter: PropTypes.string,
  urlGithub: PropTypes.string,
};

export default SocialBar;
