import "./Navbar.style.css";
import "animate.css";
import React, { useState } from "react";


export const Navbar = () => {
  const [animation, setAnimation] = useState(false);
  const trigger = () => {
    // setAnimation("Text animate__animated animate__tada");
    // const Timeout = setTimeout(untrigger, 900);
    setAnimation(!animation);
  };


  const [animation1, setAnimation1] = useState(false);
  const trigger1 = () => {
    // setAnimation("Text animate__animated animate__tada");
    // const Timeout = setTimeout(untrigger, 900);
    setAnimation1(!animation1);
  };




  const [animation2, setAnimation2] = useState(false);
  const trigger2 = () => {
    // setAnimation("Text animate__animated animate__tada");
    // const Timeout = setTimeout(untrigger, 900);
    setAnimation2(!animation2);
  };



  const [animation3, setAnimation3] = useState(false);
  const trigger3 = () => {
    // setAnimation("Text animate__animated animate__tada");
    // const Timeout = setTimeout(untrigger, 900);
    setAnimation3(!animation3);
  };




  const [animation4, setAnimation4] = useState(false);
  const trigger4 = () => {
    // setAnimation("Text animate__animated animate__tada");
    // const Timeout = setTimeout(untrigger, 900);
    setAnimation4(!animation4);
  };




  const [animation5, setAnimation5] = useState(false);
  const trigger5 = () => {
    // setAnimation("Text animate__animated animate__tada");
    // const Timeout = setTimeout(untrigger, 900);
    setAnimation5(!animation5);
  };



  const [animation6, setAnimation6] = useState(false);
  const trigger6 = () => {
    // setAnimation("Text animate__animated animate__tada");
    // const Timeout = setTimeout(untrigger, 900);
    setAnimation6(!animation6);
  };




  const [animation7, setAnimation7] = useState(false);
  const trigger7 = () => {
    // setAnimation("Text animate__animated animate__tada");
    // const Timeout = setTimeout(untrigger, 900);
    setAnimation7(!animation7);
  };




  const [animation8, setAnimation8] = useState(false);
  const trigger8 = () => {
    // setAnimation("Text animate__animated animate__tada");
    // const Timeout = setTimeout(untrigger, 900);
    setAnimation8(!animation8);
  };




  const [animation9, setAnimation9] = useState(false);
  const trigger9 = () => {
    // setAnimation("Text animate__animated animate__tada");
    // const Timeout = setTimeout(untrigger, 900);
    setAnimation9(!animation9);
  };
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
          </ul>
        </div>
      </div>
      </nav>
    </div>
  );
};
