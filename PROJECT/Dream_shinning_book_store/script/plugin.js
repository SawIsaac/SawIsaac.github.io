
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 20,
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
      spaceBetween: 30,
      loop:true,
      centeredSlides: true,
      autoplay:{
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.3,
        },
        450: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2,
        },
        1140: {
          slidesPerView: 3.5,
        },
        1300: {
          slidesPerView: 4,
        },
      },
    });
  