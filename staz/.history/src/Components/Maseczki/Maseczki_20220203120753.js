import { Button, Grid } from "@mui/material";

export const Maseczki = () => {
  var newItem = {
    maseczka1: {
      name: "maseczka1",
      image: "https://o.remove.bg/downloads/127e925e-9b2d-4fa9-bbb7-36c2641a6795/5201015500LightQuiltedJacketGrangerRoyalBlue01small_800x-removebg-preview.png",
      price: "309.99",
    },
    maseczka2: {
      name: "maseczka2",
      image: "https://o.remove.bg/downloads/56fecc04-2495-4113-8653-715bfdf523cf/pol_pl_kurtka-NIKE-NSW-WINDRUNNER-AR2191-010-257350_1-removebg-preview.png",
      price: "259.99",
    },
    maseczka3: {
      name: "maseczka3",
      image: "https://o.remove.bg/downloads/dcc6ed8b-c020-4775-8bbc-67dd508b8184/520c61204ffc833e060c66f17d70-removebg-preview.png",
      price: "431.99",
    },
  };

  const addToCart = () => {
    var oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];
    oldItems.push(newItem);
    localStorage.setItem("itemArray", JSON.stringify(oldItems));
  };

  return (
    <div className="Maseczki">
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
          <img src={newItem.maseczka1.image} width="250px" height="250px" />
          <h3>{newItem.maseczka1.name}</h3>
          <h3>Cena: {newItem.maseczka1.price} zł</h3>
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
          <img src={newItem.maseczka2.image} width="250px" height="250px" />
          <h3>{newItem.maseczka2.name}</h3>
          <h3>Cena: {newItem.maseczka2.price} zł</h3>
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
          <img src={newItem.maseczka3.image} width="250px" height="250px" />
          <h3>{newItem.maseczka3.name}</h3>
          <h3>Cena: {newItem.maseczka3.price} zł</h3>
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
