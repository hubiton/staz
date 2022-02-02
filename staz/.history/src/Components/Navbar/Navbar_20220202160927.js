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
import Box from "@mui/material/Box";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

export const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div id="Navbar1">
      <nav>
        <div className="Navbar" >
          <List
            component={Stack}
            style={{
              color: "white",
              height: 36,
              bgcolor: "#252222",
              display: "flex",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <Link to="/" style={{textDecoration: "inherit", color: "#af24ff"}}>
              <ListItemButton style={{ textAlign: "center", width: "100px", paddingLeft:"250px" }}>
                <ListItemText primary="Home" />
              </ListItemButton>
            </Link>
            <Link to="/Cart"style={{textDecoration: "inherit", color: "#af24ff"}}>
              <ListItemButton style={{ textAlign: "center", width: "100px", paddingLeft:"250px" }}>
                <ListItemText primary="Koszyk" />
              </ListItemButton>
            </Link>

            <Box
              sx={{
                
                bgcolor: open ? "#252222" : "#252222",
                pb: open ? 0 : 0,
                height: "36px",
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  px: 3,
                  pt: 0.5,
                  pb: open ? 0 : 0,
                  bgcolor: "#252222",
                }}
              >
                <ListItemText
                  primary="Build"
                  style={{color: "#af24ff"}}
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: "medium",
                    lineHeight: "20px",
                    mb: "2px",
                  }}
                  secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: "16px",
                    color: open ? "#252222" : "#252222",
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transform: open ? "rotate(-180deg)" : "rotate(0)",
                    transition: "0.2s",
                  }}
                />
              </ListItemButton>
              {open && (
                <>
                  <Link to="/Buty"style={{textDecoration: "inherit", color: "#af24ff"}}>
                    <ListItemButton
                      key={1}
                      sx={{ py: 0, minHeight: 32, color: "#252222" }}
                    >
                      <ListItemText
                        primary={"fff"}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: "medium",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <ListItemButton
                    key={1}
                    sx={{ py: 0, minHeight: 32, color: "#252222" }}
                  >
                    <ListItemText
                      primary={"fff"}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                      }}
                    />
                  </ListItemButton>
                </>
              )}
            </Box>
          </List>
        </div>
      </nav>
    </div>
  );
};
