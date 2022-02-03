import { Button, Grid } from "@mui/material";

export const Koszulki = () => {
  var newItem = {
    Koszulka1: {
      name: "Koszulka1",
      image: "https://elanskis.com/media/catalog/product/e/l/elan-polo-shirt-m-pst91819-3d.png",
      price: "199.99",
    },
    Koszulka2: {
      name: "Koszulka2",
      image: "https://o.remove.bg/downloads/1b4ac955-e6d0-4af1-ba25-7d58f0059cd5/17830632_500_A-removebg-preview.png",
      price: "71.99",
    },
    Koszulka3: {
      name: "Koszulka3",
      image: "https://o.remove.bg/downloads/6e4f810c-e21e-4e43-8693-972dd22b3bdb/61nSbXmlI3S._UX679_-removebg-preview.png",
      price: "149.99",
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
            backgroundColor: "#cfd0d1",
            boxShadow: " 4px 3px 3px 8px rgba(19, 19, 19, 1)",
            borderRadius: "25px",
            width: "15%",
            height: "65%",
          }}
        >
          <img src={newItem.Koszulka1.image} width="250px" height="250px" />
          <h3>{newItem.Koszulka1.name}</h3>
          <h3>Cena: {newItem.Koszulka1.price} zł</h3>
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
          <img src={newItem.Koszulka2.image} width="250px" height="250px" />
          <h3>{newItem.Koszulka2.name}</h3>
          <h3>Cena: {newItem.Koszulka2.price} zł</h3>
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
          <img src={newItem.Koszulka3.image} width="250px" height="250px" />
          <h3>{newItem.Koszulka3.name}</h3>
          <h3>Cena: {newItem.Koszulka3.price} zł</h3>
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
