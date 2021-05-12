import React from 'react';
import ServicesCard from './ServicesCard';
import './styles/AboutServicesPage.css';
import listOfServices from '../data/listOfServices.json';

const AboutServicesPage = () => {
  const servicesCards = [];
  listOfServices.forEach((item, index) => {
    const index_is_even = index % 3 == 0;
    servicesCards.push(
      <ServicesCard
        cardColor={index_is_even ? 'white' : 'black'}
        content={item.content}
        delay={item.delay}
        iconCSS={item.iconCSS}
        key={index}
        title={item.title}
      />,
    );
  });
  return (
    <div className="container-fluid services" data-aos="fade-up">
      <header className="section-header pt-5">
        <h2>Servicios</h2>
      </header>
      <div className="container mb-5">
        <div className="row gy-3">{servicesCards}</div>
      </div>
    </div>
  );
};

export default AboutServicesPage;
