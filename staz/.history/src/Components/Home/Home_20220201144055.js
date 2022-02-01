import "./Home.style.css";
import "animate.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export const Home = () => {
  return (
    <>
      <div id="Home">
        <div class="slider">
          <Splide
            options={{
              rewind: true,
              gap: "1rem",
            }}
          >
            <SplideSlide>
              <img src="https://postimg.cc/ygR4qSns" alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
              <img src="https://postimg.cc/hh9WpTf0" alt="Image 2" />
            </SplideSlide>
            <SplideSlide>
              <img src="https://postimg.cc/zHwsvZ9Q" alt="Image 3" />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </>
  );
};
