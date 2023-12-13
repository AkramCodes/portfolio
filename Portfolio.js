   
   
  //  MEnu-Icon Navbar --------------------------------
console.log('hello')
  let menuIcon = document.querySelector(`#menu-icon`);
  let navbar = document.querySelector(`.navbar`);

  menuIcon.onclick = () => {

    menuIcon.classList.toggle(`bx-x`);
    navbar.classList.toggle(`activate`);

  }
   
   
   
   
   //  =======  Scroll section   ========
    let sections = document.querySelectorAll(`section`);
    let navLinks = document.querySelectorAll(`header nav a`);


   window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute(`id`);
      console.log(top)
      if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove(`activate`);
          // document.querySelector(`header nav a[href*=` + id + `]`).classList.add(`activate`);
          document.querySelector(`header nav a`).classList.add(`activate`);
        });
      };

    });
  };

  
    //  =======  sticky Navbar  ========
    window.onscroll = () => {
    let header = document.querySelector(`.header`);

    header.classList.toggle(`sticky`, window.scrollY > 100);



// ========remove navbar menu icon when click navbar link (scroll)=========

menuIcon.classList.remove(`bx-x`);
navbar.classList.remove(`activate`);



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
