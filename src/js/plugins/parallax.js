import simpleParallax from 'simple-parallax-js';
import 'rellax';

var images = document.querySelectorAll('.parallax-img');
new simpleParallax(images, {
  delay: 0.8,
  transition: 'cubic-bezier(0,0,0,1)',
});

var rellax = new Rellax('.rellax', {
  speed: -2,
  center: true,
});

console.log(`rellax = ${rellax}`);
