$(document).ready(function(){
    window.tl = new TimelineLite();
    tl.from(".hero, .description",.5,{opacity:0},0);
    tl.staggerFrom(".proposal-overview > div, .project-overview .container > div",.5,{opacity:0},0.1);
    tl.staggerFrom(".info ul li",.5,{opacity:0},0.1);
    tl.staggerFrom(".content-block",.5,{opacity:0},0.1);
    tl.staggerFrom(".project",.5,{opacity:0, ease: Power1.easeOut},0.1);
  
    $(".inquire-form").validetta({
      display: "inline",
      errorClose: !1,
      onValid: function(a) {
          a.preventDefault();
          var b = $(this),
              c = $("input[type=submit]", b),
              d = {
                  name: $("input[name=name]").val(),
                  email: $("input[name=email]").val(),
                  "company-name": $("input[name=company-name]").val(),
                  "project-overview": $("textarea[name=project-overview]").val(),
                  "company-stage": $("select[name=company-stage]").val(),
                  "project-date": $("select[name=project-date]").val(),
                  "project-budget": $("select[name=project-budget]").val()
              };
          $.ajax({
              type: "POST",
              url: $(this.form).prop("action"),
              data: d,
              dataType:"json",
              beforeSend: function() {
                  c.prop("disabled", "disabled")
              },
              complete: function() {
                  $("html, body").animate({
                      scrollTop: 0
                  }, 200), $(".inquire-step-1").fadeOut(200, function() {
                      $(".inquire-step-2").fadeIn()
                  })
              }
          })
      },
      onError: function(a) {
          a.preventDefault()
      }
    });  

    $(".project-index-grid").imagesLoaded(function() {
        $(".project-index-grid").isotope({
            itemSelector: ".project",
            percentPosition: !0,
            layoutMode: "masonry",
            masonry: {
                columnWidth: ".grid-sizer"
            }
        })
    })
    
  });
