import React from 'react';
import TeamCard from './TeamCard';
import listOfTeam from '../data/listOfTeam.json';
import './styles/AboutTeamPage.css';
import personUno from '../img/personUno.png';
import personDos from '../img/personDos.png';
import personTres from '../img/personTres.png';
import personCuatro from '../img/personCuatro.png';

const AboutTeamPage = () => {
  const pictures = [
    personUno,
    personDos,
    personUno,
    personDos,
    personTres,
    personCuatro,
  ];
  const teamCards = [];
  listOfTeam.forEach((item, index) => {
    teamCards.push(
      <TeamCard
        key={index}
        content={item.content}
        image={pictures[index]}
        name={item.name}
        title={item.title}
        urlLinkedIn={item.urlLinkedIn}
        urlTwitter={item.urlTwitter}
        urlGithub={item.urlGithub}
      />,
    );
  });
  return (
    <div className="team-boxed">
      <div className="container">
        <div className="intro">
          <header className="section-header pt-5">
            <h2>Nosotros</h2>
          </header>
        </div>
        <div className="row people">{teamCards}</div>
      </div>
    </div>
  );
};

export default AboutTeamPage;
