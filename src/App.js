import { Navbar } from "./Components/Navbar/Navbar";
import {orginals,action } from './urls'
import './App.css'
import Banner from "./Components/Banner/Banner";
import Row from "./Components/Rowpost/Row";

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Banner/>
      orginals
      <Row url={orginals}title='Netflix Orginals'/>
      <Row url={action}title='Action' isSmall/>
         
         
    

    </div>
  );
}

export default App;
