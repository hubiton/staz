import { Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
export const Bluzy = () => {
  let [items] = React.useState(
    JSON.parse(localStorage.getItem("itemArray") || "[]")
  );
  const [buty1, setButy1] = useState([]);
  const buty1CollectionRef = collection(db, "bluzy");
  useEffect(() => {
    const getButy1 = async () => {
      const data = await getDocs(buty1CollectionRef);
      const data1 = data.docs.map(
        (doc) => doc._document.data.value.mapValue.fields
      );
      setButy1(data1);
    };
    getButy1();
  }, []);
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
          height: "73.4vh",
        }}
      >
        {buty1
          ? buty1.map((newItem, index) => (
              <Grid
                key={index}
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
                <img
                  src={newItem?.img?.stringValue}
                  width="250px"
                  height="250px"
                />
                <h3>{newItem?.name?.stringValue}</h3>
                <h3>Cena: {newItem?.price?.doubleValue} zł</h3>
                <Button
                  variant="outlined"
                  onClick={() => addToCart(newItem)}
                  style={{ borderColor: "#af24ff", color: "#af24ff" }}
                >
                  Dodaj do Koszyka
                </Button>
              </Grid>
            ))
          : null}
      </Grid>
    </div>
  );
};
