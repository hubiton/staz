import { Button, Grid } from "@mui/material";

export const Bluzy = () => {
  var newItem = {
    Bluza1: {
      name: "Bluza1",
      image:
        "https://ibb.co/DQp8ks3",
      price: "74.99",
    },
    Bluza2: {
      name: "Bluza2",
      image:
        "https://ibb.co/h19N4XH",
      price: "74.99",
    },
    Bluza3: {
      name: "Bluza3",
      image:
        "https://ibb.co/64wjLBB",
      price: "99.99",
    },
  };

  const addToCart = () => {
    var oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];
    oldItems.push(newItem);
    localStorage.setItem("itemArray", JSON.stringify(oldItems));
  };

  return (
    <div className="Bluzy">
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          backgroundImage: "url(https://wallpaperaccess.com/full/1209710.jpg)",
          height: "74.8vh"
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
          <img src={newItem.Bluza1.image} width="250px" height="250px" />
          <h3>{newItem.Bluza1.name}</h3>
          <h3>Cena: {newItem.Bluza1.price} zł</h3>
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
          <img src={newItem.Bluza2.image} width="250px" height="250px" />
          <h3>{newItem.Bluza2.name}</h3>
          <h3>Cena: {newItem.Bluza2.price} zł</h3>
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
          <img src={newItem.Bluza3.image} width="250px" height="250px" />
          <h3>{newItem.Bluza3.name}</h3>
          <h3>Cena: {newItem.Bluza3.price} zł</h3>
          <Button variant="outlined" onClick={addToCart}>
            Dodaj do Koszyka
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
