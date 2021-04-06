import './App.css';
import Navbar from './components/Navbar.jsx';
import SectionHero from './components/SectionHero.jsx';
import Services from './components/Services.jsx';

function App() {
  return (
    <div className="App">
    <Navbar />
    <SectionHero />
    <Services />
   </div>
  );
}

export default App;
