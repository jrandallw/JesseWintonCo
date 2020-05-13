

function delay(n) {
    n = n || 2000;
    return new Promise(done => {
      setTimeout(() => {
        done();
      }, n);
    });
  }

// Function to add and remove the page transition screen
function pageTransition() {

    var tl = gsap.timeline();
    tl.set('.loading-screen', { transformOrigin: "bottom left"});
    tl.to('.loading-screen', { duration: .5, scaleY: 1});
    tl.to('.loading-screen', { duration: .5, scaleY: 0, skewX: 0, transformOrigin: "top left", ease: "power1.out", delay: 1 });
  }
  
  // Function to animate the content of each page
  function contentAnimation() {
  
    window.tl = new TimelineLite();
    tl.from(".hero, .description",.5,{opacity:0},0);
    tl.staggerFrom(".project",.5,{y:50, opacity:0, ease: Power1.easeOut},0.1);
    tl.staggerFrom(".proposal-overview > div, .project-overview .container > div",.5,{opacity:0},0.1);
    tl.staggerFrom(".info ul li",.5,{opacity:0},0.1);
    tl.staggerFrom(".content-block",.5,{opacity:0},0.1);
  
  }
  
  $(function() {
  
    barba.init({
  
      sync: true,
  
      transitions: [{
  
        async leave(data) {
          
          const done = this.async();
          
          pageTransition();
          await delay(1000);
          done();
  
        },
  
        async enter(data) {
          contentAnimation();
        },
  
        async once(data) {
          contentAnimation();
        }
  
      }]
    });
  
  });