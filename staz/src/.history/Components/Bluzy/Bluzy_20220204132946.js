import { Button, Grid } from '@mui/material';
import React, { useEffect } from 'react';

export const Bluzy = () => {
	let [items] = React.useState(
		JSON.parse(localStorage.getItem('itemsArray') || '[]')
	);
	const newItems = {
		Bluza1: {
			name: 'Bluza1',
			image: 'https://media.discordapp.net/attachments/633022735567683584/939130437761138758/bluza1-removebg-preview.png',
			price: '74.99',
		},
		Bluza2: {
			name: 'Bluza2',
			image: 'https://media.discordapp.net/attachments/633022735567683584/939130558787747900/bluza3-removebg-preview.png',
			price: '74.99',
		},
		Bluza3: {
			name: 'Bluza3',
			image: 'https://media.discordapp.net/attachments/633022735567683584/939130578618437682/bluza2-removebg-preview.png',
			price: '99.99',
		},
	};
	
useEffect(() =>{nazwa()},[])
function nazwa () {
	console.log('123456')
}

	const addToCart = (item) => {
		items = [...items, item];
		localStorage.setItem('itemArray', JSON.stringify(items));
	};
	return (
		<div className="Bluzy">
			<Grid
				container
				style={{
					display: 'flex',
					justifyContent: 'space-evenly',
					backgroundImage: 'url(https://wallpaperaccess.com/full/1209710.jpg)',
					height: '73.5vh',
				}}
			>
				{Object.values(newItems).map((newItem) => (
					<Grid
						item
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							marginTop: 75,
							backgroundColor: '#cfd0d1',
							boxShadow: ' 4px 3px 3px 8px rgba(19, 19, 19, 1)',
							borderRadius: '25px',
							height: 'fit-content',
							padding: '15px',
						}}
					>
						<img src={newItem.image} width="250px" height="250px" alt="bluza" />
						<h3>{newItem.name}</h3>
						<h3>Cena: {newItem.price} zł</h3>
						<Button
							variant="outlined"
							onClick={() => addToCart(newItem)}
							style={{ borderColor: '#af24ff', color: '#af24ff' }}
						>
							Dodaj do Koszyka
						</Button>
					</Grid>
				))}
			</Grid>
		</div>
	);
};
