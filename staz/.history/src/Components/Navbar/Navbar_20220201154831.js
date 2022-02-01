import "./Navbar.style.css";
import "animate.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  link,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

export const Navbar = () => {
  const [animation, setAnimation] = useState(false);
  const trigger = () => {
    setAnimation(!animation);
  };

  const [animation1, setAnimation1] = useState(false);
  const trigger1 = () => {
    setAnimation1(!animation1);
  };

  const [animation2, setAnimation2] = useState(false);
  const trigger2 = () => {
    setAnimation2(!animation2);
  };

  const [animation3, setAnimation3] = useState(false);
  const trigger3 = () => {
    setAnimation3(!animation3);
  };

  const [animation4, setAnimation4] = useState(false);
  const trigger4 = () => {
    setAnimation4(!animation4);
  };

  const [animation5, setAnimation5] = useState(false);
  const trigger5 = () => {
    setAnimation5(!animation5);
  };

  const [animation6, setAnimation6] = useState(false);
  const trigger6 = () => {
    setAnimation6(!animation6);
  };

  const [animation7, setAnimation7] = useState(false);
  const trigger7 = () => {
    setAnimation7(!animation7);
  };

  const [animation8, setAnimation8] = useState(false);
  const trigger8 = () => {
    setAnimation8(!animation8);
  };

  const [animation9, setAnimation9] = useState(false);
  const trigger9 = () => {
    setAnimation9(!animation9);
  };

  const [animation10, setAnimation10] = useState(false);
  const trigger10 = () => {
    setAnimation10(!animation10);
  };

  const navigate=
  return (
    <div id="Navbar">
      <nav>
        <div className="Navbar">
          <div className="Text">
            <ul className="list">
              <li
                className={
                  animation ? "Text animate__animated animate__tada" : "Text"
                }
                onMouseEnter={trigger}
                onMouseLeave={trigger}
                onClick={navigate}
              >
                buty
              </li>
              <li
                className={
                  animation1 ? "Text animate__animated animate__tada" : "Text"
                }
                onMouseEnter={trigger1}
                onMouseLeave={trigger1}
              >
                Kurtki
              </li>
              <li
                className={
                  animation2 ? "Text animate__animated animate__tada" : "Text"
                }
                onMouseEnter={trigger2}
                onMouseLeave={trigger2}
              >
                Spodnie
              </li>
              <li
                className={
                  animation3 ? "Text animate__animated animate__tada" : "Text"
                }
                onMouseEnter={trigger3}
                onMouseLeave={trigger3}
              >
                Bluzy
              </li>
              <li
                className={
                  animation4 ? "Text animate__animated animate__tada" : "Text"
                }
                onMouseEnter={trigger4}
                onMouseLeave={trigger4}
              >
                Nakrycia głowy
              </li>
              <li
                className={
                  animation5 ? "Text animate__animated animate__tada" : "Text"
                }
                onMouseEnter={trigger5}
                onMouseLeave={trigger5}
              >
                Szale
              </li>
              <li
                className={
                  animation6 ? "Text animate__animated animate__tada" : "Text"
                }
                onMouseEnter={trigger6}
                onMouseLeave={trigger6}
              >
                Rękawiczki
              </li>
              <li
                className={
                  animation7 ? "Text animate__animated animate__tada" : "Text"
                }
                onMouseEnter={trigger7}
                onMouseLeave={trigger7}
              >
                Okulary
              </li>
              <li
                className={
                  animation8 ? "Text animate__animated animate__tada" : "Text"
                }
                onMouseEnter={trigger8}
                onMouseLeave={trigger8}
              >
                Maseczki
              </li>
              <li
                className={
                  animation9 ? "Text animate__animated animate__tada" : "Text"
                }
                onMouseEnter={trigger9}
                onMouseLeave={trigger9}
              >
                Koszulki
              </li>
              <li
                className={
                  animation10 ? "Text animate__animated animate__tada" : "Text"
                }
                onMouseEnter={trigger10}
                onMouseLeave={trigger10}
              >
                home
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
