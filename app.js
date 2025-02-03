import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'


var swiper3 = new Swiper(".mySwiper", {
  grabCursor: true, 
  effect: "creative",
  speed: 1600,
  cssMode: false,
  loop: true,
  autoplay: {
      delay: 2000, 
      disableOnInteraction: false, 
      pauseOnMouseEnter: true, 
  },
  creativeEffect: { 
    prev: { 
      shadow: true, 
      origin: "left center", 
      translate: ["-5%", 0, -150], 
      rotate: [0, 100, 0],
      easing: "cubic-bezier(.17,.67,.83,.67)",
    }, 
    next: { 
      origin: "right center", 
      translate: ["5%", 0, -150], 
      rotate: [0, -100, 0],
      easing: "cubic-bezier(.17,.67,.83,.67)",
    }, 
  },
  touchRatio: 1,
  touchAngle: 45,
  resistance: true,
  resistanceRatio: 0.85,
});



