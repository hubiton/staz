import "./Home.style.css";
import "animate.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export const Home = () => {
  return (
    <>
      <div id="Home">
        <div class="slider">
          <Splide
            options={{
              type  : 'fade', 'loop',
              rewind: true,
            }}}
          >
            <SplideSlide>
              <img src="https://i.postimg.cc/KzqZMPMk/1.jpg" alt="1" />
            </SplideSlide>
            <SplideSlide>
              <img src="https://i.postimg.cc/ryHVy9T7/2.jpg" alt="2" />
            </SplideSlide>
            <SplideSlide>
              <img src="https://i.postimg.cc/HnFdST3T/3.jpg" alt="3" />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </>
  );
};
