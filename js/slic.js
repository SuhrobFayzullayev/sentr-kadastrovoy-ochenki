$(document).ready(function () {
  $(".slider__list").slick({
    dots: true,
    arrows: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1500,
    autoplay: true,
    fade: true,
  });

  $(".useful_resources__list").slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplaySpeed: 5000,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  });

  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 20,
    data: false,
    nav: true,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },

      750: {
        items: 2,
      },

      1250: {
        items: 3,
      },
    },
  });
});
