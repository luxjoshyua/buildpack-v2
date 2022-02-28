import 'Plugins/tabPlugin';

// content tabs init
export default function initTabs() {
  jQuery('.tabset').tabset({
    tabLinks: 'a',
    defaultTab: true,
  });

  jQuery('.exterior-slide-tab').tabset({
    tabLinks: 'a',
    toggle: true,
    defaultTab: false,
    parentClass: '.holder',
    addClassOnParent: true,
  });

  jQuery('.interior-slide-tab').tabset({
    tabLinks: 'a',
    toggle: true,
    defaultTab: false,
    parentClass: '.holder',
    addClassOnParent: false,
  });
}
