$(document).ready(function(){
    $('.project-index-grid').isotope({
    itemSelector: '.project',
    columnWidth: '.grid-sizer',
    layoutMode: 'masonry',
    percentPosition: !0
  })
});
