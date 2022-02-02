import { Button } from "@mui/material";

export const Czapki = () => {

const addToCard = () => {   
  var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
  oldItems.push(newItem);
  localStorage.setItem('itemArray', JSON.stringify(oldItems));

};

  return (
    <div className="Czapki">
      <img src="https://images.obi.pl/product/PL/412x329/296299_1.jpg" />
      <h3>Cena: 59.99zł</h3>
      <Button variant="outlined">Dodaj do Koszyka</Button>
    </div>
  );
};
