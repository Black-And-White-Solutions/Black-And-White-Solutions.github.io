import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar.jsx';
import Presentation from './components/Presentation.jsx';
import Services from './components/Services.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <Services />
      <Form />
   </div>
  );
}

export default App;
