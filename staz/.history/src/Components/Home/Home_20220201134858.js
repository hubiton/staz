import "./Home.style.css";
import "animate.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';



export const Home = () => {
  return <div id="Home">
<Splide>
  <SplideSlide>
    <img src="image1.jpg" alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img src="image2.jpg" alt="Image 2"/>
  </SplideSlide>
</Splide>
      </div>;

};
Splide.mount();

