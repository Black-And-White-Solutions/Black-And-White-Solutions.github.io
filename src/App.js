import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Presentation from "./components/Presentation.jsx";
import Services from "./components/Services.jsx";
import Form from "./components/Form.jsx";

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
