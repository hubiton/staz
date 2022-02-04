import './Home.style.css';
import 'animate.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export const Home = () => {
	return (
		<>
			<div id="Home">
				<div class="slider"style={backgroundColor='black'}>
					<Splide
					
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
							<img src="https://media.discordapp.net/attachments/633022735567683584/939120619193270352/i-buty-sportowe-nike-jordan-access-ar3762-001-r-43-removebg-preview.png"height={'250px'} alt="2" />
						</SplideSlide>
						<SplideSlide>
							<img src="https://media.discordapp.net/attachments/633022735567683584/939124170904723466/5838_2-removebg-preview.png"height={'250px'} alt="3" />
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
