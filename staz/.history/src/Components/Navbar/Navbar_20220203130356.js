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
              justifyContent: "space-evenly"
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <Link to="/" style={{textDecoration: "inherit", color: "#af24ff"}}>
              <ListItemButton style={{ textAlign: "center", width: "300px"}}>
                <ListItemText primary="Home" />
              </ListItemButton>
            </Link>
            <Link to="/Cart"style={{textDecoration: "inherit", color: "#af24ff"}}>
              <ListItemButton style={{ textAlign: "center", width: "300px"}}>
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
              style={{ textAlign: "center", width: "300px", color:"#af24ff" }}
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
                  primary="Kategorie"
                  style={{color: "#af24ff"}}
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: "medium",
                    lineHeight: "20px",
                    mb: "2px",
                  }}
                  secondary=""
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
                <div className="list">
                  <Link to="/Buty"style={{textDecoration: "inherit", color: "#af24ff"}} >
                    <ListItemButton
                      key={1}
                      sx={{ py: 0, minHeight: 32, color: "#white", textAlign: "center" }}
                    >
                      <ListItemText
                        primary={"Buty"}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: "medium",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/Bluzy"style={{textDecoration: "inherit", color: "#af24ff", textAlign: "center"}} >
                    <ListItemButton
                      key={1}
                      sx={{ py: 0, minHeight: 32, color: "#white", textAlign: "center"}}
                    >
                      <ListItemText
                        primary={"Bluzy"}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: "medium",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/Czapki"style={{textDecoration: "inherit", color: "#af24ff"}} >
                    <ListItemButton
                      key={1}
                      sx={{ py: 0, minHeight: 32, color: "#white", textAlign: "center" }}
                    >
                      <ListItemText
                        primary={"Czapki"}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: "medium",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/Koszulki"style={{textDecoration: "inherit", color: "#af24ff"}} >
                    <ListItemButton
                      key={1}
                      sx={{ py: 0, minHeight: 32, color: "#white", textAlign: "center" }}
                    >
                      <ListItemText
                        primary={"Koszulki"}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: "medium",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/Kurtki"style={{textDecoration: "inherit", color: "#af24ff"}} >
                    <ListItemButton
                      key={1}
                      sx={{ py: 0, minHeight: 32, color: "#white", textAlign: "center" }}
                    >
                      <ListItemText
                        primary={"Kurtki"}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: "medium",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/Maseczki"style={{textDecoration: "inherit", color: "#af24ff"}} >
                    <ListItemButton
                      key={1}
                      sx={{ py: 0, minHeight: 32, color: "#white", textAlign: "center" }}
                    >
                      <ListItemText
                        primary={"Maseczki"}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: "medium",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/Okulary"style={{textDecoration: "inherit", color: "#af24ff"}} >
                    <ListItemButton
                      key={1}
                      sx={{ py: 0, minHeight: 32, color: "#white", textAlign: "center" }}
                    >
                      <ListItemText
                        primary={"Okulary przeciwsłoneczne"}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: "medium",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/Rekawiczki"style={{textDecoration: "inherit", color: "#af24ff"}} >
                    <ListItemButton
                      key={1}
                      sx={{ py: 0, minHeight: 32, color: "#white", textAlign: "center" }}
                    >
                      <ListItemText
                        primary={"Rekawiczki"}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: "medium",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/Spodnie"style={{textDecoration: "inherit", color: "#af24ff"}} >
                    <ListItemButton
                      key={1}
                      sx={{ py: 0, minHeight: 32, color: "#white", textAlign: "center" }}
                    >
                      <ListItemText
                        primary={"Spodnie"}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: "medium",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                </div>
              )}
            </Box>
          </List>
        </div>
      </nav>
    </div>
  );
};
