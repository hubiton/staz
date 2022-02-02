import "./Navbar.style.css";
import "animate.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

export const Navbar = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

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
    <div id="Navbar1">
      <nav>
        <div className="Navbar">
          <List
            component={Stack}
            direction="row"
            sx={{
              width: "100%",
              bgcolor: "#252222",
              color: "white",
              height: 36,
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Koszyk" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Inbox" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <StarBorder />
                  <ListItemText primary="Starred" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <StarBorder />
                  <ListItemText primary="Starred" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <StarBorder />
                  <ListItemText primary="Starred" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <StarBorder />
                  <ListItemText primary="Starred" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <StarBorder />
                  <ListItemText primary="Starred" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <StarBorder />
                  <ListItemText primary="Starred" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <StarBorder />
                  <ListItemText primary="Starred" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <StarBorder />
                  <ListItemText primary="Starred" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <StarBorder />
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </div>
      </nav>
    </div>
  );
};
