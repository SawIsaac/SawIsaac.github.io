
    var swiper = new Swiper(".mySwiper", {
      loop:true,
      centeredSlides: true,
      autoplay:{
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        720: {
          slidesPerView: 2,
        },
        960: {
          slidesPerView: 2,
        },
        1140: {
          slidesPerView: 3,
        },
      },
    });

    var swiper = new Swiper(".featured-slider", {
      spaceBetween: 50,
      loop:true,
      centeredSlides: true,
      autoplay:{
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1140: {
          slidesPerView: 4,
        },
        1300: {
          slidesPerView: 4,
        },
      },
    });
  