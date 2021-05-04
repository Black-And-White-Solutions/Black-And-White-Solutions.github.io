import React from 'react';
import CardContent from './CardContent';
import TimelineCard from './TimelineCard';
import './styles/Process.css';
import listOfTimeline from '../data/listOfTimeline.json';

const Proceso = () => {
  const TimelineCards = [];
  listOfTimeline.forEach((item, index) => {
    const index_is_even = index % 2 == 0;
    TimelineCards.push(
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
      <div className="container timeline mb-5">
        <TimelineCard
          cardColor="black"
          content="Et hinc magna voluptatum usu, cum veniam graece et. Ius ea
                scripserit temporibus, pri cu harum tacimates neglegentur. At
                adipisci incorrupte nam. Cu qui sumo appareat constituto."
          direction="left"
          iconCSS="fas fa-users"
          number={1}
          title="Envio de solicitud"
        />
        <div className="containerAbout containerAbout-right">
          <div className="image bg-white">
            <h1 className="text-center pt-2">2</h1>
          </div>
          <div className="content white-box">
            <CardContent
              title="Envio de solicitud"
              content=" Et hinc magna voluptatum usu, cum veniam graece et. Ius ea
                scripserit temporibus, pri cu harum tacimates neglegentur. At
                adipisci incorrupte nam. Cu qui sumo appareat constituto."
              iconCSS="fas fa-users me-3"
              cardColor="black"
            />
          </div>
        </div>
        <div className="containerAbout containerAbout-left">
          <div className="image">
            <h1 className="text-center pt-2 text-white">3</h1>
          </div>
          <div className="content black-box ">
            <CardContent
              title="Envio de solicitud"
              content=" Et hinc magna voluptatum usu, cum veniam graece et. Ius ea
                scripserit temporibus, pri cu harum tacimates neglegentur. At
                adipisci incorrupte nam. Cu qui sumo appareat constituto."
              iconCSS="fas fa-users me-3"
              cardColor="black"
            />
          </div>
        </div>
        <div className="containerAbout containerAbout-right">
          <div className="image bg-white">
            <h1 className="text-center pt-2">4</h1>
          </div>
          <div className="content white-box">
            <CardContent
              title="Envio de solicitud"
              content=" Et hinc magna voluptatum usu, cum veniam graece et. Ius ea
                scripserit temporibus, pri cu harum tacimates neglegentur. At
                adipisci incorrupte nam. Cu qui sumo appareat constituto."
              iconCSS="fas fa-users me-3"
              cardColor="black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proceso;
