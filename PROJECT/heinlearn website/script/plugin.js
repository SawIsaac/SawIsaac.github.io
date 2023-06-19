var swiper = new Swiper(".courses-slider", {
    spaceBetween: 100,
    // loop:true,
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
        slidesPerView: 1,
      },
      720: {
        slidesPerView: 2,
      },
      960: {
        slidesPerView: 2,
      },
      1140: {
        slidesPerView: 2,
      },
    },
  });

  var swiper = new Swiper(".logoslider", {
    slidesPerView: 6,
    spaceBetween: 30,
    loop:true,
    autoplay:{
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 1000, // Duration of slide transition (in milliseconds)
  effect: 'slide', // Choose the slide effect
  slideToClickedSlide: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  