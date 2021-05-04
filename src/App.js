import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Presentation from './components/Presentation.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process';
import Team from './components/Team';
import Form from './components/Form.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <Services />
      <Process />
      <Team />
      <Form />
    </div>
  );
}

export default App;
