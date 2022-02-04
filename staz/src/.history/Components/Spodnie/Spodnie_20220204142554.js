import { Button, Grid } from "@mui/material";
import React from "react";

export const Spodnie = () => {
  let [items] = React.useState(
    JSON.parse(localStorage.getItem("itemArray") || "[]")
  );
  var newItems = {
    Kurtka1: {
      name: "Spodnie1",
      image: "https://media.discordapp.net/attachments/633022735567683584/939125274350612521/spodnie-pilkarskie-dresowe-dla-dzieci-adidas-squadra-2021-removebg-preview.png",
      price: "119.99",
    },
    Kurtka2: {
      name: "Spodnie2",
      image: "https://media.discordapp.net/attachments/633022735567683584/939125423365836830/SPODNIE-DRESOWE-MESKIE-4F-SPMD301-NOSD4-removebg-preview.png",
      price: "95.99",
    },
    Kurtka3: {
      name: "Spodnie3",
      image: "https://media.discordapp.net/attachments/633022735567683584/939125564973912104/spodnie-under-armour-sto_23968-removebg-preview.png",
      price: "299.99",
    },
  };

  const addToCart = (item) => {
    items = [...items, item];
    localStorage.setItem("itemArray", JSON.stringify(items));
  };

  return (
    <div className="Kurtki">
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          backgroundImage: "url(https://wallpaperaccess.com/full/1209710.jpg)",
          height: "73.5vh",
        }}
      >
         {Object.values(newItems).map((newItem) => (
          <Grid
            item
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 75,
              backgroundColor: "#cfd0d1",
              boxShadow: " 4px 3px 3px 8px rgba(19, 19, 19, 1)",
              borderRadius: "25px",
              height: "fit-content",
              padding: "15px",
            }}
          >
            <img src={newItem.image} width="250px" height="250px" />
            <h3>{newItem.name}</h3>
            <h3>Cena: {newItem.price} zł</h3>
            <Button
              variant="outlined"
              onClick={() => addToCart(newItem)}
              style={{ borderColor: "#af24ff", color: "#af24ff" }}
            >
              Dodaj do Koszyka
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
