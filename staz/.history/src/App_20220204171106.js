import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Header } from "./Components/Header/Header";
import { Buty } from "./Components/Buty/Buty";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Bluzy } from "./Components/Bluzy/Bluzy";
import { Czapki } from "./Components/Czapki/Czapki";
import { EnhancedTable } from "./Components/cart/cart";
import React from "react";

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
        <Route path="/Cart" element={<EnhancedTable />} />
      </Routes>
    </Router>
  );
}

export default App;
