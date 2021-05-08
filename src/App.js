import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import LandingPage from './components/LandingPage';
import Services from './components/Services.jsx';
import AboutTimelinePage from './components/AboutTimelinePage';
import AboutTeamPage from './components/AboutTeamPage';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <LandingPage />
      <Services />
      <AboutTimelinePage />
      <AboutTeamPage />
    </div>
  );
}

export default App;
