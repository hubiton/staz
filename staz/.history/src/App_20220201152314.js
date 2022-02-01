import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Header } from "./Components/Header/Header";
import { Buty } from "./Components/Buty/Buty";
import { BrowserRouter as Router, Routes, link, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";

function App() {
  return (
    <>

<Link to="/Components/Buty/Buty">Expenses</Link>

      <Header />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buty" element={<Buty />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
