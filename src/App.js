import React from 'react';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import Services from './components/Services';
import Process from './components/Process';
import Team from './components/Team';
import Form from './components/Form';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <Services />
      <Process />
      <Team />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
