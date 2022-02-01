import "./Home.style.css";
import "animate.css";
import Splide from '@splidejs/splide';
import "../../../node_modules/@splidejs/splide/dist/css/splide.min.css"

var splide = new Splide( '.splide', {
    type  : 'fade',
    rewind: true,
  } );

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
new Splide( '.splide' ).mount();

