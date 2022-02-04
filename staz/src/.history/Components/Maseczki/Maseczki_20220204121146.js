import { Button, Grid } from "@mui/material";

export const Maseczki = () => {
  var newItems = {
    maseczka1: {
      name: "maseczka1",
      image: "https://o.remove.bg/downloads/e5ffd81a-51c0-4701-aab9-a5815943a924/MASECZKA-ADIDAS-ORIGINALS-FACE-COVERS-HB7851-M-L-removebg-preview.png",
      price: "19.99",
    },
    maseczka2: {
      name: "maseczka2",
      image: "https://o.remove.bg/downloads/acab36f4-3a2d-4bbf-a948-c10bff125ca9/2-X-NIKE-MASECZKA-WIELOKROTNEGO-UZYTKU-removebg-preview.png",
      price: "49.99",
    },
    maseczka3: {
      name: "maseczka3",
      image: "https://o.remove.bg/downloads/b1b54b62-0292-4c9b-b4d4-b1a557800e30/maseczka_bawelniana-removebg-preview.png",
      price: "0.99",
    },
  };

  const addToCart = () => {
    var oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];
    oldItems.push(newItems);
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