import simpleParallax from 'simple-parallax-js';
import 'rellax';
import LocomotiveScroll from 'locomotive-scroll';



const parallaxImgs = document.querySelectorAll('.parallax-img');
new simpleParallax(parallaxImgs, {
  delay: 0.8,
  transition: 'cubic-bezier(0,0,0,1)',
});

console.log(`parallax image = ${parallaxImgs}`)

const rellax = new Rellax('.rellax', {
  speed: -2,
  center: true,
});

console.log(`rellax = ${rellax}`);


const locomotiveScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  getSpeed: true,
  getDirection: true,
  inertia: 0.75,
});

console.log(`locomotive scroll = ${locomotiveScroll}`)

document.addEventListener('DOMContentLoaded', function () {
  function ScrollUpdateDelay() {
    setTimeout(function () {
      locomotiveScroll.update();
    }, 1000);
  }

  ScrollUpdateDelay();
});


