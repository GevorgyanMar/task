import './App.css';
import Header from "./Componet/header/header";
import Home from "./Componet/home/home";
import GoogleMaps from "./Componet/googleMap/googleMap";

function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>
        <GoogleMaps/>
    </div>
  );
}

export default App;
