    //  =======  Scroll section   ========
    let section

   window.onscroll = () => {


    //  =======  sticky Navbar  ========
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);
   };







//    Swiper Design -----------------
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
