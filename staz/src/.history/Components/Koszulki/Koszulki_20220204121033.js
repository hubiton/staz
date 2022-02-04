import { Button, Grid } from "@mui/material";

export const Koszulki = () => {
  var newItems = {
    Koszulka1: {
      name: "Koszulka1",
      image: "https://elanskis.com/media/catalog/product/e/l/elan-polo-shirt-m-pst91819-3d.png",
      price: "199.99",
    },
    Koszulka2: {
      name: "Koszulka2",
      image: "https://o.remove.bg/downloads/1ccb73e5-c9fe-4d2d-a750-ca37498d6723/17830632_500_A-removebg-preview.png",
      price: "71.99",
    },
    Koszulka3: {
      name: "Koszulka3",
      image: "https://o.remove.bg/downloads/5555471c-7121-4e34-9152-94f78056cea5/UNDER-ARMOUR-KOSZULKA-SPORTOWA-MESKA-T-SHIRT-removebg-preview.png",
      price: "59.99",
    },
  };

  const addToCart = () => {
    var oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];
    oldItems.push(newItems);
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
