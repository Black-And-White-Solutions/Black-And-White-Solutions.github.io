import React from 'react';
import TimelineCard from './TimelineCard';
import './styles/AboutTimelinePage.css';
import listOfTimeline from '../data/listOfTimeline.json';

const AboutTimelinePage = () => {
  const timelineCards = [];
  listOfTimeline.forEach((item, index) => {
    const index_is_even = index % 2 == 0;
    timelineCards.push(
      <TimelineCard
        cardColor={index_is_even ? 'black' : 'white'}
        content={item.content}
        direction={index_is_even ? 'left' : 'right'}
        number={index + 1}
        iconCSS={item.iconCSS}
        key={index}
        title={item.title}
      />,
    );
  });
  return (
    <div className="container-fluid About">
      <header className="section-header pt-5">
        <h2>Proceso</h2>
      </header>
      <div className="container timeline mb-5">{timelineCards}</div>
    </div>
  );
};

export default AboutTimelinePage;
