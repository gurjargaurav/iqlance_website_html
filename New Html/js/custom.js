
/*offering-slider*/
$(document).ready(function() {
  $('.offering-slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 4,
        nav: true,
        loop: true,
        margin: 20
      }
    }
  })
  $('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay')
  })
});

/*offering-slider*/

/*navbar scroll color change*/

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

/*navbar scroll color change*/