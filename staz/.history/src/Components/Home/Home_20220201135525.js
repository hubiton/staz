import "./Home.style.css";
import "animate.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';



export const Home = () => {
  return <div id="Home">
      <div class="slider">
    <Splide
      options={ {
        rewind: true,
        gap   : '1rem',
      } }
    >
      <SplideSlide>
        <img src="https://cdn.galleries.smcloud.net/t/galleries/gf-RHVz-1oGL-352o_jedzenie-z-dostawa-do-domu-co-polacy-zamawiaja-najczesciej-1920x1080-nocrop.jpg" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="https://www.tasteaway.pl/wp-content/uploads/2020/03/kura-990x742.jpg" alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="https://odpady.org/wp-content/uploads/2019/08/gdzie-wyrzucac-jedzenie.jpeg" alt="Image 3"/>
      </SplideSlide>
    </Splide>
    </div>
      </div>;

};


