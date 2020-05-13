$(window).load(function(){    
    window.tl = new TimelineLite();
    tl.from(".hero, .description",.5,{opacity:0},0);
    tl.staggerFrom(".project",.5,{y:50, opacity:0, ease: Power1.easeOut},0.1);
    tl.staggerFrom(".proposal-overview > div, .project-overview .container > div",.5,{opacity:0},0.1);
    tl.staggerFrom(".info ul li",.5,{opacity:0},0.1);
    tl.staggerFrom(".content-block",.5,{opacity:0},0.1);
});