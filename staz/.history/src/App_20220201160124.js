import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Header } from "./Components/Header/Header";
import { Buty } from "./Components/Buty/Buty";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Components/Home/Home";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Navbar />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/buty">Buty</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buty" element={<Buty />} />
      </Routes>
    </Router>
  );
}

export default App;
