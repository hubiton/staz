import '../../App.css';
import {Navbar} from '../Navbar/Navbar'
import {Header} from '../Header/Header'
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const Buty = () => {

  return (
    <div className="Buty">
        <Header/>
        <Navbar/>
    </div>
  );
}


