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
            }}
            style={{ color: "white", height: 36 }}
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
