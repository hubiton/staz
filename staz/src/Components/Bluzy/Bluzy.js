import { Button, Grid } from '@mui/material';
import React from 'react';

export const Bluzy = () => {
	let [items] = React.useState(
		JSON.parse(localStorage.getItem('itemsArray') || '[]')
	);
	const newItems = {
		Bluza1: {
			name: 'Bluza1',
			image: 'https://i.ibb.co/2dNsPmX/bluza1.webp',
			price: '74.99',
		},
		Bluza2: {
			name: 'Bluza2',
			image: 'https://i.ibb.co/19QFj66/bluza3.webp',
			price: '74.99',
		},
		Bluza3: {
			name: 'Bluza3',
			image: 'https://i.ibb.co/YTQS1D8/bluza2.webp',
			price: '99.99',
		},
	};
	

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
