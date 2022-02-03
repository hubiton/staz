import { Button, Grid } from "@mui/material";

export const Koszulki = () => {
  var newItem = {
    Koszulka1: {
      name: "Koszulka1",
      image: "https://elanskis.com/media/catalog/product/e/l/elan-polo-shirt-m-pst91819-3d.png",
      price: "49.99",
    },
    Koszulka2: {
      name: "Koszulka2",
      image: "https://o.remove.bg/downloads/59a96488-3119-43e3-9b03-a5df5b1602b3/CZAPKA-NIKE-MESKA-Z-DASZKIEM-943092-010-R-ONESIZE-removebg-preview.png",
      price: "68.99",
    },
    Koszulka3: {
      name: "Koszulka3",
      image: "https://o.remove.bg/downloads/8a806585-14b9-4c1b-893e-fe9945d2150a/czapka-z-daszkiem-adidas-bejsbolowka-meska-damska-removebg-preview.png",
      price: "59.99",
    },
  };

  const addToCart = () => {
    var oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];
    oldItems.push(newItem);
    localStorage.setItem("itemArray", JSON.stringify(oldItems));
  };

  return (
    <div className="Koszulki">
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
          <img src={newItem.Koszulka1.image} width="250px" height="250px" />
          <h3>{newItem.Koszulka1.name}</h3>
          <h3>Cena: {newItem.Koszulka1.price} zł</h3>
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
          <img src={newItem.Koszulka2.image} width="250px" height="250px" />
          <h3>{newItem.Koszulka2.name}</h3>
          <h3>Cena: {newItem.Koszulka2.price} zł</h3>
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
          <img src={newItem.Koszulka3.image} width="250px" height="250px" />
          <h3>{newItem.Koszulka3.name}</h3>
          <h3>Cena: {newItem.Koszulka3.price} zł</h3>
          <Button variant="outlined" onClick={addToCart}>
            Dodaj do Koszyka
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
