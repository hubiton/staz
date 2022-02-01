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
              type: "loop",
              perPage: 1,
              autoplay: true,
              arrows: true,
              hasAutoplayProgress: true,
            }}
          >
            <SplideSlide>
              <img src="https://i.postimg.cc/KzqZMPMk/1.jpg" alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
              <img src="https://i.postimg.cc/ryHVy9T7/2.jpg" alt="Image 2" />
            </SplideSlide>
            <SplideSlide>
              <img src="https://i.postimg.cc/HnFdST3T/3.jpg" alt="Image 3" />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </>
  );
};
