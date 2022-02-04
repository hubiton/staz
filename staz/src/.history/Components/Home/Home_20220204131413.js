import './Home.style.css';
import 'animate.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export const Home = () => {
	return (
		<>
			<div id="Home">
				<div class="slider">
					<Splide
					height={'250px'}
						options={{
							type: 'loop',
							autoplay: true,
							drag: 'free',
							perPage: 1,
						}}
					>
						<SplideSlide>
							<img
								src="https://media.discordapp.net/attachments/633022735567683584/939120929617870848/pol_il_BUTY-MESKIE-LIFESTYLE-NIKE-AIR-MAX-270-CZARNE-AH8050-002-37595-removebg-preview.png"height={'250px'} 
							/>
						</SplideSlide>
						<SplideSlide>
							<img src="https://i.postimg.cc/ryHVy9T7/2.jpg" alt="2" />
						</SplideSlide>
						<SplideSlide>
							<img src="https://i.postimg.cc/HnFdST3T/3.jpg" alt="3" />
						</SplideSlide>
					</Splide>
				</div>
				<div className="text">
					Napis sssssss ssssssss ssssssss ssssssss sssssss ssssss sss ssss ssss
					ssssss ssssssss sssssss ssssssss sssss sssssssss.
				</div>
			</div>
		</>
	);
};
