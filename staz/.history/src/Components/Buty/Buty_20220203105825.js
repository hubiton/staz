import { Button, Grid } from "@mui/material";

export const Buty = () => {
  var newItem = {
    Buty1: {
      name: "Buty1",
      image: "https://a.allegroimg.com/original/115195/a4703c4c48b491cc995753e867b2/BUTY-SPORTOWE-NIKE-JORDAN-ACCESS-AR3762-006-R-40",
      price: "599.99",
    },
    Buty2: {
      name: "Buty2",
      image: "https://adrenaline.pl/pol_il_BUTY-MESKIE-LIFESTYLE-NIKE-AIR-MAX-270-CZARNE-AH8050-002-37595.jpg",
      price: "679.99",
    },
    Buty3: {
      name: "Buty3",
      image: "https://o.remove.bg/downloads/9157afd4-f5ce-48db-b734-5730052eb740/0000199808715_1__jf-removebg-preview.png",
      price: "209.00",
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
