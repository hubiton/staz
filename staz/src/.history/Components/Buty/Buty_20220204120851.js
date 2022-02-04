import { Button, Grid } from "@mui/material";

export const Buty = () => {
  var newItems = {
    Buty1: {
      name: "Buty1",
      image:
        "https://o.remove.bg/downloads/87d6ebdb-6d6c-4117-a558-c0b7a7fe9356/BUTY-SPORTOWE-NIKE-JORDAN-ACCESS-AR3762-006-R-40-removebg-preview.png",
      price: "599.99",
    },
    Buty2: {
      name: "Buty2",
      image:
        "https://o.remove.bg/downloads/7585b6b7-65f3-4ab5-bfee-cea05e579186/pol_il_BUTY-MESKIE-LIFESTYLE-NIKE-AIR-MAX-270-CZARNE-AH8050-002-37595-removebg-preview.png",
      price: "679.99",
    },
    Buty3: {
      name: "Buty3",
      image:
        "https://o.remove.bg/downloads/b3f3a697-30d7-4997-a7ff-c8033dd84f0b/buty-meskie-adidas-orginals-deerupt-runner-czarne-biale_2-removebg-preview.png",
      price: "279.99",
    },
  };

  const addToCart = (item) => {
    var oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];
    oldItems.push(item);
    localStorage.setItem("itemArray", JSON.stringify(oldItems));
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
