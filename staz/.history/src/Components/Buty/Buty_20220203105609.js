import { Button, Grid } from "@mui/material";

export const Buty = () => {
  var newItem = {
    Buty1: {
      name: "Buty1",
      image: "https://a.allegroimg.com/original/115195/a4703c4c48b491cc995753e867b2/BUTY-SPORTOWE-NIKE-JORDAN-ACCESS-AR3762-006-R-40",
      price: "74.99",
    },
    Buty2: {
      name: "Buty2",
      image: "https://i.ibb.co/19QFj66/bluza3.webp",
      price: "74.99",
    },
    Buty3: {
      name: "Buty3",
      image: "https://i.ibb.co/YTQS1D8/bluza2.webp",
      price: "99.99",
    },
  };

  const addToCart = () => {
    var oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];
    oldItems.push(newItem);
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
          height: "74.8vh",
        }}
      >
        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 75,
          }}
        >
          <img src={newItem.Buty1.image} width="250px" height="250px" />
          <h3>{newItem.Buty1.name}</h3>
          <h3>Cena: {newItem.Buty1.price} zł</h3>
          <Button variant="outlined" onClick={addToCart}>
            Dodaj do Koszyka
          </Button>
        </Grid>

        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 75,
          }}
        >
          <img src={newItem.Buty2.image} width="250px" height="250px" />
          <h3>{newItem.Buty2.name}</h3>
          <h3>Cena: {newItem.Buty2.price} zł</h3>
          <Button variant="outlined" onClick={addToCart}>
            Dodaj do Koszyka
          </Button>
        </Grid>
        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 75,
          }}
        >
          <img src={newItem.Buty3.image} width="250px" height="250px" />
          <h3>{newItem.Buty3.name}</h3>
          <h3>Cena: {newItem.Buty3.price} zł</h3>
          <Button variant="outlined" onClick={addToCart}>
            Dodaj do Koszyka
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
