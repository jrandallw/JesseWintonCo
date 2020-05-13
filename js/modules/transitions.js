import { gsap } from 'gsap';

function delay(n) {
    n = n || 2000;
    return new Promise(done => {
      setTimeout(() => {
        done();
      }, n);
    });
  }

  function pageTransition() {
    var tl = gsap;
    tl.set('.loading-screen', { transformOrigin: "bottom left"});
    tl.to('.loading-screen', { duration: .5, scaleY: 1});
    tl.to('.loading-screen', { duration: .5, scaleY: 0, skewX: 0, transformOrigin: "top left", ease: "power1.out", delay: 1 });
  }

  function workIndexAnimation() {
    var tl = gsap.timeline();
    tl.from('.project',{duration: .5, y:50, opacity:0, ease: 'power1.out', stagger: .2});
  }

  export { delay, pageTransition, workIndexAnimation };