import React from 'react';
import AboutTeamPage from './AboutTeamPage';
import AboutTimelinePage from './AboutTimelinePage';
import LandingPage from './LandingPage';
import Services from './Services';

const Layout = () => {
  return (
    <>
      <LandingPage id="landingPage" />
      <Services id="services" />
      <AboutTimelinePage id="aboutTimelinePage" />
      <AboutTeamPage id="aboutTeamPage" />
    </>
  );
};

export default Layout;
