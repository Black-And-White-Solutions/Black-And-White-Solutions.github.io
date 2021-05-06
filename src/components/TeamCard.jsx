import React from 'react';
import PropTypes from 'prop-types';
import SocialBar from './SocialBar';
import './styles/TeamCard.css';

const TeamCard = ({
  content,
  name,
  image,
  title,
  urlLinkedIn,
  urlTwitter,
  urlGithub,
}) => {
  return (
    <div className="col-md-3 col-lg-3">
      <div className="card teamCard">
        <div className="textCenter teamNameSpace">
          <h3 className="teamFont teamName">{name}</h3>
        </div>
        <div className="textCenter teamTitleSpace">
          <p className="teamFont teamTitle">{title}</p>
        </div>
        <img className="picture" src={image} alt="" />
        <div className="textCenter teamDescriptionSpace">
          <p className="teamFont teamDescription">{content}</p>
        </div>
        <SocialBar
          urlLinkedIn={urlLinkedIn}
          urlTwitter={urlTwitter}
          urlGithub={urlGithub}
        />
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  content: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  urlLinkedIn: PropTypes.string,
  urlTwitter: PropTypes.string,
  urlGithub: PropTypes.string,
};

TeamCard.defaultProps = {
  urlLinkedIn: '/#',
  urlTwitter: '/#',
  urlGithub: '/#',
};

export default TeamCard;
