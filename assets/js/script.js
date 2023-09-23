// jquery initialize
$(document).ready(function(){
    $('.brands-parent').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]  
    });
  });

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll > 80) {
        $("#site-header").addClass("nav-fixed");
    } else {
        $("#site-header").removeClass("nav-fixed");
    }
});
// counter
let visibilityIds = ['#counters_1', '#counters_2', '#counters_3',]; 

// default counter class
let counterClass = '.counter';

// default animation speed
let defaultSpeed = 3000;
