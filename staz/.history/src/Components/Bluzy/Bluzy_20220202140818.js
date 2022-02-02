import { Button, Grid } from "@mui/material";

export const Bluzy = () => {
  var newItem = {
    Bluza1: {
      name: "Bluza1",
      image: "https://image.spreadshirtmedia.net/image-server/v1/mp/products/T1007A109MPA4345PT17X60Y34D152555961FS2089/views/1,width=378,height=378,appearanceId=109,backgroundColor=F2F2F2/pro-trump-new-yorker-gift-kontrastowa-bluza-z-kapturem-unisex.jpg",
      price: "59.99",
    },
    Bluza2: {
      name: "Bluza2",
      image:
        "https://a.allegroimg.com/s400/11b801/7d74f5c448dc9b2ef804ed5db10a/MESKA-BLUZA-Z-KAPTUREM-BAWELNIANA-JORDAN-ROZM-M",
      price: "12.99",
    },
    Bluza3: {
      name: "Bluza3",
      image:
        "https://milworld.pl/pol_pl_Mil-Tec-Czapka-Zimowa-Akryl-Cienka-Czarna-280_1.png",
      price: "12.99",
    },
  };

  const addToCart = () => {
    var oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];
    oldItems.push(newItem);
    localStorage.setItem("itemArray", JSON.stringify(oldItems));
  };

  return (
    <div className="Bluzy">
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 75,
        }}
      >
        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={newItem.Bluza1.image} width="250px" height="250px" />
          <h3>{newItem.Bluza1.name}</h3>
          <h3>Cena: {newItem.Bluza1.price} zł</h3>
          <Button variant="outlined" onClick={addToCart}>
            Dodaj do Koszyka
          </Button>
        </Grid>

        <Grid item>
          <img src={newItem.Bluza2.image} width="250px" height="250px" />
          <h3>{newItem.Bluza2.name}</h3>
          <h3>Cena: {newItem.Bluza2.price} zł</h3>
          <Button variant="outlined" onClick={addToCart}>
            Dodaj do Koszyka
          </Button>
        </Grid>
        <Grid item>
          <img src={newItem.Bluza3.image} width="250px" height="250px" />
          <h3>{newItem.Bluza3.name}</h3>
          <h3>Cena: {newItem.Bluza3.price} zł</h3>
          <Button variant="outlined" onClick={addToCart}>
            Dodaj do Koszyka
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
