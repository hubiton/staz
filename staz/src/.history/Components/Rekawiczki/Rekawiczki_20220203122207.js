import { Button, Grid } from "@mui/material";

export const Rekawiczki = () => {
  var newItem = {
    Rekawiczki1: {
      name: "Rekawiczki1",
      image: "https://o.remove.bg/downloads/8b778cc1-d541-4356-9285-d32e31e35dad/0000201483152_02_mt-removebg-preview.png",
      price: "89.99",
    },
    Rekawiczki2: {
      name: "Rekawiczki2",
      image: "https://o.remove.bg/downloads/15e6c49b-991a-4d75-b59e-80ec61d54deb/2020_10_14_DESPORTIVO_0045-removebg-preview.png",
      price: "49.99",
    },
    Rekawiczki3: {
      name: "Rekawiczki3",
      image: "https://www.vitasport.pl/pol_pl_rekawiczki-ADIDAS-Fieldplayer-CP-CW5640-231101_1.png",
      price: "39.99",
    },
  };

  const addToCart = () => {
    var oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];
    oldItems.push(newItem);
    localStorage.setItem("itemArray", JSON.stringify(oldItems));
  };

  return (
    <div className="Rekawiczki">
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
            backgroundColor: "#cfd0d1",
            boxShadow: " 4px 3px 3px 8px rgba(19, 19, 19, 1)",
            borderRadius: "25px",
            width: "15%",
            height: "65%",
          }}
        >
          <img src={newItem.Rekawiczki1.image} width="250px" height="250px" />
          <h3>{newItem.Rekawiczki1.name}</h3>
          <h3>Cena: {newItem.Rekawiczki1.price} zł</h3>
          <Button
            variant="outlined"
            onClick={addToCart}
            style={{ borderColor: "#af24ff", color: "#af24ff" }}
          >
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
            backgroundColor: "#cfd0d1",
            boxShadow: " 4px 3px 3px 8px rgba(19, 19, 19, 1)",
            borderRadius: "25px",
            width: "15%",
            height: "65%",
          }}
        >
          <img src={newItem.Rekawiczki2.image} width="250px" height="250px" />
          <h3>{newItem.Rekawiczki2.name}</h3>
          <h3>Cena: {newItem.Rekawiczki2.price} zł</h3>
          <Button
            variant="outlined"
            onClick={addToCart}
            style={{ borderColor: "#af24ff", color: "#af24ff" }}
          >
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
            backgroundColor: "#cfd0d1",
            boxShadow: " 4px 3px 3px 8px rgba(19, 19, 19, 1)",
            borderRadius: "25px",
            width: "15%",
            height: "65%",
          }}
        >
          <img src={newItem.Rekawiczki3.image} width="250px" height="250px" />
          <h3>{newItem.Rekawiczki3.name}</h3>
          <h3>Cena: {newItem.Rekawiczki3.price} zł</h3>
          <Button
            variant="outlined"
            onClick={addToCart}
            style={{ borderColor: "#af24ff", color: "#af24ff" }}
          >
            Dodaj do Koszyka
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
