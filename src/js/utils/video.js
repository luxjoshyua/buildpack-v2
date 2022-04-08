const intersectDivs = document.querySelectorAll('.intersect');
// intersection observer
const options = {
  threshold: 0.1,
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.target.classList.contains('video-js')) {
      const video = entry.target;
      const videoID = video.getAttribute('id');
      const player = window.videojs.getPlayer(videoID);
      // console.log('Video: visible');
      if (entry.isIntersecting) {
        if (player.currentTime() !== 0 || player.currentTime() === 0) {
          player.ready(async () => {
            const promise = player.play();
            if (promise !== undefined) {
              promise
                .then(() => {})
                .catch(() => {
                  // console.log("Video: PAWING");
                  player.play();
                  player.mute()
                });
            }
          });
        }
      } else if (!player.paused()) {
        // console.log("Video: PAWSED");
        player.pause();
      }
    }
  });
}, options);

intersectDivs.forEach((el) => {
  observer.observe(el);
});