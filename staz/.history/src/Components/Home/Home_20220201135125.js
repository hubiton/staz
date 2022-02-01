import "./Home.style.css";
import "animate.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';



export const Home = () => {
  return <div id="Home">
    <Splide
      options={ {
        rewind: true,
        gap   : '1rem',
      } }
    >
      <SplideSlide>
        <img src="image1.jpg" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="image2.jpg" alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="image3.jpg" alt="Image 3"/>
      </SplideSlide>
    </Splide>
      </div>;

};
Splide.mount();

