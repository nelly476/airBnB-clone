import "./App.css";
import Navbar from "./components/Navbar";
import logo from "./images/airbnb-logo.png";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="" />
      <Navbar />
    </div>
  );
}

export default App;
