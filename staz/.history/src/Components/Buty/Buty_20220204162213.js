import { Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

export const Buty = () => {
  let [items] = React.useState(
    JSON.parse(localStorage.getItem("itemArray") || "[]")
  );

  const [buty1, setButy1] = useState([]);
  const buty1CollectionRef = collection(db, "buty1");
  let data;
  const getButy1 = async () => {
    let data = await getDocs(buty1CollectionRef);
    setButy1(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getButy1();
  }, []);

  console.log(data);

  var newItems = {
    Buty1: {
      name: "Buty1",
      image:
        "https://media.discordapp.net/attachments/633022735567683584/939120619193270352/i-buty-sportowe-nike-jordan-access-ar3762-001-r-43-removebg-preview.png",
      price: "599.99",
    },
    Buty2: {
      name: "Buty2",
      image:
        "https://media.discordapp.net/attachments/633022735567683584/939120929617870848/pol_il_BUTY-MESKIE-LIFESTYLE-NIKE-AIR-MAX-270-CZARNE-AH8050-002-37595-removebg-preview.png",
      price: "679.99",
    },
    Buty3: {
      name: "Buty3",
      image:
        "https://media.discordapp.net/attachments/633022735567683584/939121167896301578/CG6088-removebg-preview.png",
      price: "279.99",
    },
  };

  const addToCart = (item) => {
    items = [...items, item];
    localStorage.setItem("itemArray", JSON.stringify(items));
  };

  return (
    <div className="Buty">
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
            <h3>Cena: {newItem.price} z??</h3>
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
