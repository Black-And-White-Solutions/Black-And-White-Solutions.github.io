import React from 'react';
import CardContent from './CardContent';
import './styles/TimelineCard.css';
import PropTypes from 'prop-types';

const TimelineCard = ({
  cardColor,
  content,
  direction,
  iconCSS,
  number,
  title,
}) => {
  const invertColor = cardColor == 'white' ? 'black' : 'white';
  return (
    <div
      className={`timelineCard cardPosition-${direction}`}
      data-aos="fade-up"
      data-aos-delay="200">
      <div className={`numberBox ${invertColor}`}>
        <h1 className="text-center">{number}</h1>
      </div>
      <div className={`card ${cardColor} ${direction}`}>
        <CardContent
          content={content}
          iconCSS={`${iconCSS} me-3`}
          title={title}
        />
      </div>
    </div>
  );
};
TimelineCard.propTypes = {
  cardColor: PropTypes.oneOf(['white', 'black']),
  iconCSS: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  direction: PropTypes.oneOf(['left', 'right']),
  number: PropTypes.number,
};
export default TimelineCard;
