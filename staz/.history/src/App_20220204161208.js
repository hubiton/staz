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
import { EnhancedTable } from "./Components/cart/cart";
import React, { useState, useEffect } from "react";
import {db} from './firebase-config';
import { collection, getDocs } from "firebase/firestore";

function App() {

  const [buty1, setButy1] = useState([]);
  const buty1CollectionRef = collection(db, "buty1");

    useEffect(() => {

      const getButy1 = async () => {
          const data = await getDocs(buty1CollectionRef)
          setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
      };

      getButy1();
    }, []);

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
        <Route path="/Cart" element={<EnhancedTable />} />
      </Routes>
    </Router>
    <div id="cos"></div>
  );
}

export default App;
