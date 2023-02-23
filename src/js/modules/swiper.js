
import Swiper from "swiper/bundle";

const swiper = new Swiper(".slider", {
  slidesPerView: 1,
  spaceBetween: 20,
// autoplay: {
//   delay: 2500,
//   disableOnInteraction: false,
// },
breakpoints: {
  830: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  1770: {
    slidesPerView: 3,
    spaceBetween: 48,
  },
},
});