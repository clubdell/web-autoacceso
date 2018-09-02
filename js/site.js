(function($) {
  var navbar = $(".navbar");

  $(window).scroll(function() {
    if ($(window).scrollTop() <= 40) {
      navbar.removeClass("navbar-scroll");
    } else {
      navbar.addClass("navbar-scroll");
    }
  });

  var slickSliders = function() {
    $('.multiple-items').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      infinite: true,

      autoplay: true,
      autoplaySpeed: 2000,

      arrows: true,
      nextArrow: '<span class="next"><i class="fas fa-angle-right"></i></span>',
      prevArrow: '<span class="prev"><i class="fas fa-angle-left"></i></span>',
      draggable: false,
      responsive: [{
        breakpoint: 1125,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]});
  };

  slickSliders();
})(jQuery);
