import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Header } from "./Components/Header/Header";
import { Buty } from "./Components/Buty/Buty";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./Components/Home/Home";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route exact path="/" element={<Home />} />
    //     <Route path="/buty" element={<Buty />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
