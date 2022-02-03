import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Header } from "./Components/Header/Header";
import { Buty } from "./Components/Buty/Buty";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Bluzy } from "./Components/Bluzy/Bluzy";
import { Czapki } from "./Components/Czapki/Czapki";
import { Koszulki } from "./Components/Koszulki/Koszulki";
import { Kurtki } from "./Components/Kurtki/Kurtki";
import { Maseczki } from "./Components/Maseczki/Maseczki";
import { Okulary } from "./Components/Okulary/Okulary";
import { Rekawiczki } from "./Components/Rekawiczki/Rekawiczki";
import { Spodnie } from "./Components/Spodnie/Spodnie";
import { Cart } from "./Components/cart/cart";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buty" element={<Buty />} />
        <Route path="/Bluzy" element={<Bluzy />} />
        <Route path="/Czapki" element={<Czapki />} />
        <Route path="/Koszulki" element={<Koszulki />} />
        <Route path="/Kurtki" element={<Kurtki />} />
        <Route path="/Maseczki" element={<Maseczki />} />
        <Route path="/Okulary" element={<Okulary />} />
        <Route path="/Rekawiczki" element={<Rekawiczki />} />
        <Route path="/Spodnie" element={<Spodnie />} />

        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
