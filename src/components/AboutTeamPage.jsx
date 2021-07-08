import React from 'react';
import TeamCard from './TeamCard';
import listOfTeam from '../data/listOfTeam.json';
import './styles/AboutTeamPage.css';

const AboutTeamPage = () => {
  const teamCards = [];
  listOfTeam.forEach((item, index) => {
    teamCards.push(
      <TeamCard
        key={index.toString()}
        content={item.content}
        image={item.image}
        name={item.name}
        title={item.title}
        urlLinkedIn={item.urlLinkedIn}
        urlTwitter={item.urlTwitter}
        urlGithub={item.urlGithub}
      />,
    );
  });
  return (
    <div className="team-boxed" id="aboutTeamPage">
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
