import { Button, Grid } from "@mui/material";

export const Spodnie = () => {
  var newItem = {
    Kurtka1: {
      name: "Kurtka1",
      image: "https://o.remove.bg/downloads/43c00862-a50c-4204-b7f1-5c833144ce35/spodnie-pilkarskie-dresowe-dla-dzieci-adidas-squadra-2021-removebg-preview.png",
      price: "119.99",
    },
    Kurtka2: {
      name: "Kurtka2",
      image: "https://o.remove.bg/downloads/14ed78bf-af7d-4879-b14c-557e4079715e/SPODNIE-DRESOWE-MESKIE-4F-SPMD301-NOSD4-removebg-preview.png",
      price: "95.99",
    },
    Kurtka3: {
      name: "Kurtka3",
      image: "https://o.remove.bg/downloads/79e57d9d-5e5c-4cfe-bc5b-f107be238032/spodnie-under-armour-sto_23968-removebg-preview.png",
      price: "299.99",
    },
  };

  const addToCart = () => {
    var oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];
    oldItems.push(newItem);
    localStorage.setItem("itemArray", JSON.stringify(oldItems));
  };

  return (
    <div className="Kurtki">
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
          <img src={newItem.Kurtka1.image} width="250px" height="250px" />
          <h3>{newItem.Kurtka1.name}</h3>
          <h3>Cena: {newItem.Kurtka1.price} zł</h3>
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
          <img src={newItem.Kurtka2.image} width="250px" height="250px" />
          <h3>{newItem.Kurtka2.name}</h3>
          <h3>Cena: {newItem.Kurtka2.price} zł</h3>
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
          <img src={newItem.Kurtka3.image} width="250px" height="250px" />
          <h3>{newItem.Kurtka3.name}</h3>
          <h3>Cena: {newItem.Kurtka3.price} zł</h3>
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
