import './App.css';
import Navbar from './components/Navbar.jsx';
import Presentation from './components/Presentation.jsx';
import Services from './components/Services.jsx';
import Proceso from './components/Proceso';
import Team from './components/Team';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <Services />
      <Proceso />
      <Team /> 
   </div>
  );
}

export default App;
