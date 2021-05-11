import React from 'react';
import CardContent from './CardContent';
import PropTypes from 'prop-types';
import './styles/ServicesCard.css';

const ServicesCard = ({ delay, iconCSS, cardColor, title, content }) => {
  return (
    <div
      className="col-sm-12 col-md-6"
      data-aos="fade-up"
      data-aos-delay={delay}>
      <div className={`serviceCard ${cardColor}`}>
        <CardContent content={content} iconCSS={iconCSS} title={title} />
      </div>
    </div>
  );
};

ServicesCard.propTypes = {
  delay: PropTypes.number,
  cardColor: PropTypes.oneOf(['white', 'black']),
  iconCSS: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default ServicesCard;
