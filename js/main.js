$(window).load(function(){
  
    
    window.tl = new TimelineLite();
    //tl.staggerFrom(".index .heading",1,{opacity:0},0.5);
    tl.staggerFrom(".photo",.5,{opacity:0},0.1);

   
    /*$(".photos-index-grid").imagesLoaded(function() {
      $(".photos-index-grid").isotope({
          itemSelector: ".photo",
          percentPosition: !0,
          layoutMode: "masonry",
          masonry: {
              columnWidth: ".grid-sizer"
          }
      })
  })*/
  

  });
