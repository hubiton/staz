import { Button, Grid } from "@mui/material";

export const Czapki = () => {
  var newItem = {
    Czapka1: {
      name: "Czapka1",
      image: "https://o.remove.bg/downloads/4d967951-7d51-41e4-9b6c-b06cf7f338e2/i-under-armour-czapka-z-daszkiem-blizting-ii-camo-black-1273197-002-removebg-preview.png",
      price: "49.99",
    },
    Czapka2: {
      name: "Czapka2",
      image: "https://o.remove.bg/downloads/2a09a1a0-244a-4064-9bbc-5036531dda23/CZAPKA-NIKE-MESKA-Z-DASZKIEM-943092-010-R-ONESIZE-removebg-preview.png",
      price: "68.99",
    },
    Czapka3: {
      name: "Czapka3",
      image: "https://o.remove.bg/downloads/11eb2ead-a9e3-4647-b884-93726b553db3/czapka-z-daszkiem-adidas-bejsbolowka-meska-damska-removebg-preview.png",
      price: "59.99",
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
            backgroundColor: "#cfd0d1",
            boxShadow: " 4px 3px 3px 8px rgba(19, 19, 19, 1)",
            borderRadius: "25px",
            width: "15%",
            height: "65%",
          }}
        >
          <img src={newItem.Czapka1.image} width="250px" height="250px" />
          <h3>{newItem.Czapka1.name}</h3>
          <h3>Cena: {newItem.Czapka1.price} zł</h3>
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
          <img src={newItem.Czapka2.image} width="250px" height="250px" />
          <h3>{newItem.Czapka2.name}</h3>
          <h3>Cena: {newItem.Czapka2.price} zł</h3>
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
          <img src={newItem.Czapka3.image} width="250px" height="250px" />
          <h3>{newItem.Czapka3.name}</h3>
          <h3>Cena: {newItem.Czapka3.price} zł</h3>
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
