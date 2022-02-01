import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Header } from "./Components/Header/Header";
import { Buty } from "./Components/Buty/Buty";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router";
import { Home } from "./Components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="/buty" element={<Buty />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
