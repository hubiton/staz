import { Button, Grid } from "@mui/material";

export const Czapki = () => {
  var newItems = {
    Czapka1: {
      name: "Czapka1",
      image: "https://media.discordapp.net/attachments/633022735567683584/939121444519051294/i-under-armour-czapka-z-daszkiem-blizting-ii-camo-black-1273197-002-removebg-preview.png",
      price: "49.99",
    },
    Czapka2: {
      name: "Czapka2",
      image: "https://media.discordapp.net/attachments/633022735567683584/939121686903656498/CZAPKA-NIKE-MESKA-Z-DASZKIEM-943092-010-R-ONESIZE-removebg-preview.png",
      price: "68.99",
    },
    Czapka3: {
      name: "Czapka3",
      image: "https://o.remove.bg/downloads/11eb2ead-a9e3-4647-b884-93726b553db3/czapka-z-daszkiem-adidas-bejsbolowka-meska-damska-removebg-preview.png",
      price: "59.99",
    },
  };

  const addToCart = () => {
    var oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];
    oldItems.push(newItems);
    localStorage.setItem("itemArray", JSON.stringify(oldItems));
  };

  return (
    <div className="Czapki">
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
