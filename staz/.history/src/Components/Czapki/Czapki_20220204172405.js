import { Button, Grid } from "@mui/material";
import React from "react";

export const Czapki = () => {
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
    <div className="Czapki">
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
