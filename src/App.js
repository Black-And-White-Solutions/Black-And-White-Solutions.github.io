import './App.css';
import Navbar from './components/Navbar.jsx';
import Presentation from './components/Presentation.jsx';
import Services from './components/Services.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <Services />
   </div>
  );
}

export default App;
