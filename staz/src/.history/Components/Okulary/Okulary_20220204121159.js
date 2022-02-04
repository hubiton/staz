import { Button, Grid } from "@mui/material";

export const Okulary = () => {
  var newItem = {
    Okulary1: {
      name: "Okulary1",
      image: "https://o.remove.bg/downloads/d8bbe3c0-d0c6-4f92-bf2c-d045b6452ca0/12c393815e714499a724456a8a28468a-removebg-preview.png",
      price: "79.99",
    },
    Okulary2: {
      name: "Okulary2",
      image: "https://o.remove.bg/downloads/a1c9db4f-d465-437e-8748-d01b375850c8/5838_2-removebg-preview.png",
      price: "568.99",
    },
    Okulary3: {
      name: "Okulary3",
      image: "https://o.remove.bg/downloads/f8184d1b-7ece-49eb-8c8c-8d5d7a236b4d/pol_pl_okulary-przeciwsloneczne-AVIATOR-BLACK-cieniowane-200904_4-removebg-preview.png",
      price: "29.99",
    },
  };

  const addToCart = () => {
    var oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];
    oldItems.push(newItem);
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
