import { Button, Grid } from "@mui/material";

export const Kurtki = () => {
  var newItems = {
    Kurtka1: {
      name: "Kurtka1",
      image: "https://media.discordapp.net/attachments/633022735567683584/939122597273169950/5201015500LightQuiltedJacketGrangerRoyalBlue01small_5000x-removebg-preview.png",
      price: "309.99",
    },
    Kurtka2: {
      name: "Kurtka2",
      image: "https://media.discordapp.net/attachments/633022735567683584/939122770627948564/pol_pl_kurtka-NIKE-NSW-WINDRUNNER-AR2191-010-257350_1-removebg-preview.png",
      price: "259.99",
    },
    Kurtka3: {
      name: "Kurtka3",
      image: "https://media.discordapp.net/attachments/633022735567683584/939122917986422854/520c61204ffc833e060c66f17d70-removebg-preview.png",
      price: "431.99",
    },
  };

  const addToCart = () => {
    var oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];
    oldItems.push(newItems);
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
        {Object.values(newItems).map((newItem) => (
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
              height: "fit-content",
              padding: "15px",
            }}
          >
            <img src={newItem.image} width="250px" height="250px" />
            <h3>{newItem.name}</h3>
            <h3>Cena: {newItem.price} zł</h3>
            <Button
              variant="outlined"
              onClick={() => addToCart(newItem)}
              style={{ borderColor: "#af24ff", color: "#af24ff" }}
            >
              Dodaj do Koszyka
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
