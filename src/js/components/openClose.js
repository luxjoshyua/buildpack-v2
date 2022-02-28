import 'Plugins/openClosePlugin';

// open-close init
export default function initOpenClose() {
  jQuery('.open-close').openClose({
    activeClass: 'active',
    opener: '.opener',
    slider: '.slide',
    animSpeed: 400,
    effect: 'slide',
  });
}
