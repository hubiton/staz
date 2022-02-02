import "./Navbar.style.css";
import "animate.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

export const Navbar = () => {
  // const [animation, setAnimation] = useState(false);
  // const trigger = () => {
  //   setAnimation(!animation);
  // };

  // const [animation1, setAnimation1] = useState(false);
  // const trigger1 = () => {
  //   setAnimation1(!animation1);
  // };

  // const [animation2, setAnimation2] = useState(false);
  // const trigger2 = () => {
  //   setAnimation2(!animation2);
  // };

  // const [animation3, setAnimation3] = useState(false);
  // const trigger3 = () => {
  //   setAnimation3(!animation3);
  // };

  // const [animation4, setAnimation4] = useState(false);
  // const trigger4 = () => {
  //   setAnimation4(!animation4);
  // };

  // const [animation5, setAnimation5] = useState(false);
  // const trigger5 = () => {
  //   setAnimation5(!animation5);
  // };

  // const [animation6, setAnimation6] = useState(false);
  // const trigger6 = () => {
  //   setAnimation6(!animation6);
  // };

  // const [animation7, setAnimation7] = useState(false);
  // const trigger7 = () => {
  //   setAnimation7(!animation7);
  // };

  // const [animation8, setAnimation8] = useState(false);
  // const trigger8 = () => {
  //   setAnimation8(!animation8);
  // };

  // const [animation9, setAnimation9] = useState(false);
  // const trigger9 = () => {
  //   setAnimation9(!animation9);
  // };

  // const [animation10, setAnimation10] = useState(false);
  // const trigger10 = () => {
  //   setAnimation10(!animation10);
  // };
  return (
    <div id="Navbar">
      <nav>
        <div className="Navbar">
          <div className="Text">
            <ul className="list">
              <li
                // className={
                //   animation10 ? "Text animate__animated animate__tada" : "Text"
                // }
                // onMouseEnter={trigger10}
                // onMouseLeave={trigger10}
              >
                <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}><HomeIcon/> home</Link>
              </li>
              <li
                // className={
                //   animation ? "Text animate__animated animate__tada" : "Text"
                // }
                // onMouseEnter={trigger}
                // onMouseLeave={trigger}
              >
                <Link to="/buty" style={{ color: 'inherit', textDecoration: 'inherit' }}>buty</Link>
              </li>
              <li
                // className={
                //   animation1 ? "Text animate__animated animate__tada" : "Text"
                // }
                // onMouseEnter={trigger1}
                // onMouseLeave={trigger1}
              >
                <Link to="/Kurtki" style={{ color: 'inherit', textDecoration: 'inherit' }}>Kurtki</Link>
              </li>
              <li
                // className={
                //   animation2 ? "Text animate__animated animate__tada" : "Text"
                // }
                // onMouseEnter={trigger2}
                // onMouseLeave={trigger2}
              >
                <Link to="/Spodnie" style={{ color: 'inherit', textDecoration: 'inherit' }}>Spodnie</Link>
              </li>
              <li
                // className={
                //   animation3 ? "Text animate__animated animate__tada" : "Text"
                // }
                // onMouseEnter={trigger3}
                // onMouseLeave={trigger3}
              >
                <Link to="/Bluzy" style={{ color: 'inherit', textDecoration: 'inherit' }}>Bluzy</Link>
              </li>
              <li
                // className={
                //   animation4 ? "Text animate__animated animate__tada" : "Text"
                // }
                // onMouseEnter={trigger4}
                // onMouseLeave={trigger4}
              >
                <Link to="/Czapki" style={{ color: 'inherit', textDecoration: 'inherit' }}>Czapki</Link>
              </li>
              <li
                // className={
                //   animation5 ? "Text animate__animated animate__tada" : "Text"
                // }
                // onMouseEnter={trigger5}
                // onMouseLeave={trigger5}
              >
                <Link to="/Szale" style={{ color: 'inherit', textDecoration: 'inherit' }}>Szale</Link>
              </li>
              <li
                // className={
                //   animation6 ? "Text animate__animated animate__tada" : "Text"
                // }
                // onMouseEnter={trigger6}
                // onMouseLeave={trigger6}
              >
                <Link to="/Rekawiczki" style={{ color: 'inherit', textDecoration: 'inherit' }}>Rękawiczki</Link>
              </li>
              <li
                // className={
                //   animation7 ? "Text animate__animated animate__tada" : "Text"
                // }
                // onMouseEnter={trigger7}
                // onMouseLeave={trigger7}
              >
                <Link to="/Okulary" style={{ color: 'inherit', textDecoration: 'inherit' }}>Okulary</Link>
              </li>
              <li
                // className={
                //   animation8 ? "Text animate__animated animate__tada" : "Text"
                // }
                // onMouseEnter={trigger8}
                // onMouseLeave={trigger8}
              >
                <Link to="/Maseczki" style={{ color: 'inherit', textDecoration: 'inherit' }}>Maseczki</Link>
              </li>
              <li
                // className={
                //   animation9 ? "Text animate__animated animate__tada" : "Text"
                // }
                // onMouseEnter={trigger9}
                // onMouseLeave={trigger9}
              >
                <Link to="/Koszulki" style={{ color: 'inherit', textDecoration: 'inherit' }}>Koszulki</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
