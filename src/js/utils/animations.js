// import AOS from 'aos';
// import 'aos/dist/aos.css';

const animateDivs = document.querySelectorAll('.el-anim');
// intersection observer
const options = {
  threshold: 0.1,
};
const observer = new IntersectionObserver((entries) => {
  // entries.forEach((entry) => {
  //   if (entry.intersectionRatio >= 0.1) {
  //     console.log('Im in the viewport', entry.target);
  //     // entry.target.classList.toggle('in-view');
  //   } else {
  //     console.log('Im not in the viewport');
  //     // entry.target.classList.remove('in-view');
  //   }

  //   entry.intersectionRatio >= 0.1 ? entry.target.classList.toggle("in-view") : null

  // });

  entries.forEach((entry) => (entry.intersectionRatio >= 0.1 ? entry.target.classList.toggle('in-view') : null));
}, options);

animateDivs.forEach((el) => {
  observer.observe(el);
});

// AOS.init({
//   duration: 800,
//   once: true,
// });
