import ready, { HTML } from './utils';
import 'core-js';
import '@babel/polyfill';
import './utils/polyfills';
// import initNineHeader from './utils/header';
import initCloner from './utils/cloner';
import initSlickCarousel from './components/slickSlider';
import initInViewport from './components/inViewport';
import inittabs from './components/tabSet';

ready(() => {
  HTML.classList.add('is-loaded');
  // initNineHeader();
  initCloner();
  initSlickCarousel();
  initInViewport();
  inittabs();
});
