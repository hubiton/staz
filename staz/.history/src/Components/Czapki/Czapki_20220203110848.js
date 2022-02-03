import { Button, Grid } from "@mui/material";

export const Czapki = () => {
  var newItem = {
    Czapka1: {
      name: "Czapka1",
      image: "https://o.remove.bg/downloads/e095590f-9f73-4a0a-9fa9-89c45e43a6af/i-under-armour-czapka-z-daszkiem-blizting-ii-camo-black-1273197-002-removebg-preview.png",
      price: "49.99",
    },
    Czapka2: {
      name: "Czapka2",
      image: "https://o.remove.bg/downloads/59a96488-3119-43e3-9b03-a5df5b1602b3/CZAPKA-NIKE-MESKA-Z-DASZKIEM-943092-010-R-ONESIZE-removebg-preview.png",
      price: "679.99",
    },
    Czapka3: {
      name: "Czapka3",
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
        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 75,
          }}
        >
          <img src={newItem.Czapka1.image} width="250px" height="250px" />
          <h3>{newItem.Czapka1.name}</h3>
          <h3>Cena: {newItem.Czapka1.price} zł</h3>
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
          <img src={newItem.Czapka2.image} width="250px" height="250px" />
          <h3>{newItem.Czapka2.name}</h3>
          <h3>Cena: {newItem.Czapka2.price} zł</h3>
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
          <img src={newItem.Czapka3.image} width="250px" height="250px" />
          <h3>{newItem.Czapka3.name}</h3>
          <h3>Cena: {newItem.Czapka3.price} zł</h3>
          <Button variant="outlined" onClick={addToCart}>
            Dodaj do Koszyka
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
