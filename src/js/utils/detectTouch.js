const touchClass = 'touchevents';
const noTouchClass = 'no-touchevents';

const touchevents = (obj = window, toggleClass = false) => {
  const HTML = obj.document.documentElement;

  if ('ontouchstart' in obj || (obj.DocumentTouch && document instanceof DocumentTouch)) {
    if (toggleClass) {
      HTML.classList.remove(noTouchClass);
      HTML.classList.add(touchClass);
    }
    return true;
  } else {
    if (toggleClass) {
      HTML.classList.remove(touchClass);
      HTML.classList.add(noTouchClass);
    }
    return false;
  }
};

touchevents(window, true);

export { touchevents as default };
