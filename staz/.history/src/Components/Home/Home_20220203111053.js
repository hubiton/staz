import "./Home.style.css";
import "animate.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { FreeBreakfast } from "@mui/icons-material";

export const Home = () => {
  return (
    <>
      <div id="Home">
        <div class="slider">
          <Splide
            options={{
              type  : 'loop' ,
              drag   : 'free',
              autoplay: true,
              cover      : true,
              perPage: 1,
            }}
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
