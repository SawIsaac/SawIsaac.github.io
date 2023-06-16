var swiper = new Swiper(".courses-slider", {
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