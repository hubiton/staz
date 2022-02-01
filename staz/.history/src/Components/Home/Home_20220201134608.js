import "./Home.style.css";
import "animate.css";
import Splide from '@splidejs/splide';
import "../../../node_modules/@splidejs/splide/dist/css/splide.min.css"



export const Home = () => {
  return <div id="Home">
<div class="splide">
  <div class="splide__track">
		<ul class="splide__list">
			<li class="splide__slide">Slide 01</li>
			<li class="splide__slide">Slide 02</li>
			<li class="splide__slide">Slide 03</li>
		</ul>
  </div>
</div>
      </div>;

};
var splide = new Splide( '.splide', {
    type    : 'loop',
    perPage : 3,
    autoplay: true,
  } );
Splide.mount();

