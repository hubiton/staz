export const Buty = () => {
  import "@splidejs/splide/dist/css/splide.min.css";
  
  
  return <div className="Buty">

<Splide
            options={{
              type: "loop",
              perPage: 1,
              autoplay: true,
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

  </div>;
};

