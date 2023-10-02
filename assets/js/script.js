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

// Get a reference to the button
const backToTopButton = document.getElementById('backToTopBtn');

// Add a scroll event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        // Show the button when the user scrolls down
        backToTopButton.classList.add('active');
    } else {
        // Hide the button when the user is at the top
        backToTopButton.classList.remove('active');
    }
});

// Add a click event listener to scroll to the top
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll animation
    });
});

