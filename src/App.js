import React from 'react';
import NavigationBar from './components/NavigationBar';
import LandingPage from './components/LandingPage';
import AboutServicesPage from './components/Services';
import AboutTimelinePage from './components/AboutTimelinePage';
import AboutTeamPage from './components/Team';
import ContactPage from './components/ContactPage';
import FooterBar from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <LandingPage />
      <AboutServicesPage />
      <AboutTimelinePage />
      <AboutTeamPage />
      <ContactPage />
      <FooterBar />
    </div>
  );
}

export default App;
