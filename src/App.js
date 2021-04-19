import './App.css';
import About from './components/About';
import Services from './components/Services.jsx';
import Presentation from './components/Presentation.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <Services />
      <About />
   </div>
  );
}

export default App;
