import { Button, Grid } from "@mui/material";

export const Bluzy = () => {
  var newItem = {
    Bluza1: {
      name: "Bluza1",
      image:
        "https://a.allegroimg.com/s400/116b1f/14c09c6e43cf9bbcf9d5f066e77d/MESKA-BLUZA-Z-KAPTUREM-BUDOWLANCA-STANLEY-ROZM-L",
      price: "74.99",
    },
    Bluza2: {
      name: "Bluza2",
      image:
        "https://a.allegroimg.com/s400/11b801/7d74f5c448dc9b2ef804ed5db10a/MESKA-BLUZA-Z-KAPTUREM-BAWELNIANA-JORDAN-ROZM-M",
      price: "74.99",
    },
    Bluza3: {
      name: "Bluza3",
      image:
        "https://a.allegroimg.com/s360/116d47/dda56df0483c9c22b1bc11c02c57/BLUZA-MESKA-COUNTER-STRIKE-CS-GO-PREZENT-S",
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
          height: "75vh"
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
