import ready, { HTML } from './utils';
import 'core-js';
import '@babel/polyfill';
import 'bootstrap';
import './components/gallery';
import './components/masthead';
import './utils/polyfills';
import './utils/animations';
import './utils/anchorLink';
import './plugins/header';
import './plugins/parallax';

ready(() => {
  HTML.classList.add('is-loaded');
  // initInViewport();
});
