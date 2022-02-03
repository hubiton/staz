import { Button, Grid } from "@mui/material";

export const Buty = () => {
  var newItem = {
    Buty1: {
      name: "Buty1",
      image: "https://o.remove.bg/downloads/490ec66a-2e0d-435a-9456-65846f42fe4e/BUTY-SPORTOWE-NIKE-JORDAN-ACCESS-AR3762-006-R-40-removebg-preview.png",
      price: "599.99",
    },
    Buty2: {
      name: "Buty2",
      image: "https://o.remove.bg/downloads/0bddba86-2e92-4540-9dda-eb3863da214f/pol_il_BUTY-MESKIE-LIFESTYLE-NIKE-AIR-MAX-270-CZARNE-AH8050-002-37595-removebg-preview.png",
      price: "679.99",
    },
    Buty3: {
      name: "Buty3",
      image: "https://o.remove.bg/downloads/d6b68523-0453-455f-89ea-62271b0a8b07/buty-adidas-36-adidas-obuwie-sportowe-warszawa-539225073-removebg-preview.png",
      price: "279.99",
    },
  };

  const addToCart = () => {
    var oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];
    oldItems.push(newItem);
    localStorage.setItem("itemArray", JSON.stringify(oldItems));
  };

  return (
    <div className="Buty">
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
          <img src={newItem.Buty1.image} width="250px" height="250px" />
          <h3>{newItem.Buty1.name}</h3>
          <h3>Cena: {newItem.Buty1.price} zł</h3>
          <Button variant="outlined" onClick={addToCart}>
            Dodaj do Koszyka
          </Button>
        </Grid>

        <Grid className="grid">
          <img src={newItem.Buty2.image} width="250px" height="250px" />
          <h3>{newItem.Buty2.name}</h3>
          <h3>Cena: {newItem.Buty2.price} zł</h3>
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
            backgroundColor: "#cfd0d1",
            boxShadow: " 4px 3px 3px 8px rgba(19, 19, 19, 1)",
            borderRadius: "25px",
            width: "15%",
            height: "65%",
          }}
        >
          <img src={newItem.Buty3.image} width="250px" height="250px" />
          <h3>{newItem.Buty3.name}</h3>
          <h3>Cena: {newItem.Buty3.price} zł</h3>
          <Button variant="outlined" onClick={addToCart}
          style={{borderColor: "#af24ff", color: "#af24ff",}}>
            Dodaj do Koszyka
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
