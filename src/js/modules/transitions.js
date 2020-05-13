// custom functions
function delay(n) {
    n = n || 2000;
    return new Promise(done => {
      setTimeout(() => {
        done();
      }, n);
    });
  }

  /*function pageTransition() {

    var tl = new gsap();
    gsap.set('.loading-screen', { transformOrigin: "bottom left"});
    gsap.to('.loading-screen', { duration: .5, scaleY: 1});
    gsap.to('.loading-screen', { duration: .5, scaleY: 0, skewX: 0, transformOrigin: "top left", ease: "power1.out", delay: 1 });
  }

  function contentAnimation() {
  
    var tl = new gsap();
    tl.from(".hero, .description",{duration: .5, opacity:0},0);
    tl.staggerFrom(".project",{duration: .5, y:50, opacity:0, ease: "power1.out"},0.1);
    tl.staggerFrom(".proposal-overview > div, .project-overview .container > div",.{duration: .5, opacity:0},0.1);
    tl.staggerFrom(".info ul li",{duration: .5 ,opacity:0},0.1);
    tl.staggerFrom(".content-block",{duration: .5, opacity:0},0.1);
  
  }*/

  export { delay, pageTransition, contentAnimation };