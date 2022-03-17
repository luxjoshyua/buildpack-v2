// import './resizeHandler';
export const HTML = document.documentElement;
export const BODY = document.body;
export const BREAKPOINTS = {
  xs: 0,
  phone: 600,
  tablet: 768,
  desktop: 960,
  laptop: 1280,
  widescreen: 1440,
};

/*
  Breakpoints utility function
  @params: point - {number} - breakpoint to check, e.g. BREAKPOINTS.tablet
  @params: desktopFirst - {boolean} - if you need desktop first

  @return: boolean

  Usage

  import 2 itilities
  import {BREAKPOINTS, breakpoint} from 'Utils/global';

  window.addEventListener('resize', () => {
    if (breakpoint(BREAKPOINTS.desktop)) {
      console.log('IS DESKTOP')
    } else {
      console.log('IS MOBILE')
    }
  })
*/
export const breakpoint = (point, desktopFirst = false) => {
  if (desktopFirst) {
    return window.innerWidth < point;
  }

  return window.innerWidth >= point;
};

/*
  Detect touchevents
  @params: {obj} - window
  @return: boolean
*/
export const isTouch = (obj = window) => touchevents(obj);

/*
  "jQuery like" ready function:
  Usage:

  import ready from 'Utils/global';
  ready(() => init());
*/

export default Document.prototype.ready = (fn) => {
  if (fn && typeof fn === 'function') {
    document.addEventListener('DOMContentLoaded', () => {
      if (document.readyState === 'interactive' || document.readyState === 'complete') {
        return fn();
      }
    });
  }
};

/*
  Publish custom event
  Params:

  {eventName}: String - the name of custom event. Better to use as a variable or constant not to mess names
  {data}: Object - custom event information, e.g. node element, whatever. Accessible via event
  {once}: Bool - trigger only once or every time when called
  Exmaple:

  import {ev} from 'Utils/global';

  const eventName = 'PopupToggle';

  popup.on('click', () => {
    ev(eventName, {
      popup: this,
    })
  })

  document.addEventListener(eventName, event => {
    // this is data that we pass into custom event
    const eventData = event.detail;
    const popupInstance = eventData.popup;
  })
*/

export const ev = (eventName, data, target = document) => {
  const e = new CustomEvent(eventName, { detail: data });
  target.dispatchEvent(e);
};

/* @return boolean (true=IE) */
export const isIE = () => {
  return /*@cc_on!@*/ false || !!document.documentMode;
};
