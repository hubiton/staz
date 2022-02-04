import { Button, Grid } from "@mui/material";

export const Okulary = () => {
  var newItems = {
    Okulary1: {
      name: "Okulary1",
      image: "https://media.discordapp.net/attachments/633022735567683584/939124624715841596/19-18c861b204540f452998cd1f0e8e0cca7-removebg-preview.png",
      price: "79.99",
    },
    Okulary2: {
      name: "Okulary2",
      image: "https://media.discordapp.net/attachments/633022735567683584/939124170904723466/5838_2-removebg-preview.png",
      price: "568.99",
    },
    Okulary3: {
      name: "Okulary3",
      image: "https://o.remove.bg/downloads/45fea121-6070-4b09-afc6-135787cb7722/24-1_54-removebg-preview.png",
      price: "29.99",
    },
  };

  const addToCart = () => {
    var oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];
    oldItems.push(newItems);
    localStorage.setItem("itemArray", JSON.stringify(oldItems));
  };

  return (
    <div className="Okulary">
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
