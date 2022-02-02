import { Button, Grid } from "@mui/material";

export const Czapki = () => {
  var newItem = {
    czapka1: {
      name: "czapka1",
      image: "https://images.obi.pl/product/PL/412x329/296299_1.jpg",
      price: "59.99",
    },
    czapka2: {
      "product-name": "czapk2",
      "product-image":
        "https://milworld.pl/pol_pl_Mil-Tec-Czapka-Zimowa-Akryl-Cienka-Czarna-280_1.png",
      "product-price": "12.99",
    },
  };

  const addToCart = () => {
    var oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];
    oldItems.push(newItem);
    localStorage.setItem("itemArray", JSON.stringify(oldItems));
  };

  return (
    <div className="Czapki">
      <Grid container>
        <Grid item>
          <img src={newItem.czapka1image} />
          <h3>Cena: {newItem.czapka1.price} zł</h3>
          <Button variant="outlined" onClick={addToCart}>
            Dodaj do Koszyka
          </Button>
        </Grid>

        <Grid item>
          <img src="https://images.obi.pl/product/PL/412x329/296299_1.jpg" />
          <h3>Cena: 59.99zł</h3>
          <Button variant="outlined" onClick={addToCart}>
            Dodaj do Koszyka
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
