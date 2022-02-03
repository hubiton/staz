import { Button, Grid } from "@mui/material";

export const Kurtki = () => {
  var newItem = {
    Kurtka1: {
      name: "Kurtka1",
      image: "https://o.remove.bg/downloads/127e925e-9b2d-4fa9-bbb7-36c2641a6795/5201015500LightQuiltedJacketGrangerRoyalBlue01small_800x-removebg-preview.png",
      price: "49.99",
    },
    Kurtka2: {
      name: "Kurtka2",
      image: "https://o.remove.bg/downloads/59a96488-3119-43e3-9b03-a5df5b1602b3/CZAPKA-NIKE-MESKA-Z-DASZKIEM-943092-010-R-ONESIZE-removebg-preview.png",
      price: "68.99",
    },
    Kurtka3: {
      name: "Kurtka3",
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
