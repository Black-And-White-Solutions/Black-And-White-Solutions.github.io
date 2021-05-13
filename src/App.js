import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import LandingPage from './components/LandingPage';
import AboutServicesPage from './components/AboutServicesPage';
import AboutTimelinePage from './components/AboutTimelinePage';
import AboutTeamPage from './components/AboutTeamPage';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <LandingPage id="landingPage" />
      <AboutServicesPage id="aboutServicesPages" />
      <AboutTimelinePage id="aboutTimelinePage" />
      <AboutTeamPage id="aboutTeamPage" />
    </div>
  );
}

export default App;
