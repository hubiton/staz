import './App.css';
import {Navbar} from './Components/Navbar/Navbar'
import {Header} from './Components/Header/Header'
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";


function App() {
  const Imie = 'Imie';
  const Nazwisko = 'Nazwisko'

  return (
    <div className="App">
        <Header/>
        <Navbar/>
    </div>
  );
}


export default App;
