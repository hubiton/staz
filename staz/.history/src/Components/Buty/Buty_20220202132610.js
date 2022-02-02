import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
export const Buty = () => {

  
  
  return <div className="Buty">
<div id="slider">
          <Splide
            options={{
              type   : 'loop',
              drag   : 'free',
              focus  : 'center',
              perPage: 3,
              hasAutoplayProgress: true,
              autoScroll: {
                speed: 2,
                rewind: true.valueOf,
                autoStart: true,
            }}}>
              
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
  </div>;
};

