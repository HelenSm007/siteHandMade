
// Owl Carousel
$(document).ready(function(){
    var owl = $(".owl-carousel");
        owl.owlCarousel({
            items: 3,
            center: true,
            autoplay: true,
            autoplayTimeout: 2000,
            smartSpeed: 1000,
            autoplayHoverPause:true,
            margin: 10,
            loop: true,
            nav: true,
            responsive:{
                0:{
                  items:1
                },
                768:{
                  items:2
                },
                1180:{
                  items:3
                }
            }
        });
  });

// Плавне переміщення до каталогу
  let catalog = document.querySelector('.catalog');
  
  catalog.addEventListener('click', function(event){
      event.preventDefault(); //отмена стандартного обработчика
      document.querySelector('.header__menu').classList.toggle('active');
      document.querySelector('.header__burger').classList.toggle('active');
      let blockId = catalog.getAttribute('href');
      document.querySelector(''+blockId).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      })
  });

// Плавне переміщення до опису проекта
  let description = document.querySelector('.about');
  
  description.addEventListener('click', function(event){
      event.preventDefault(); //отмена стандартного обработчика
      document.querySelector('.header__menu').classList.toggle('active');
      document.querySelector('.header__burger').classList.toggle('active');
      let blockId = description.getAttribute('href');
      document.querySelector(''+blockId).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      })
  });

// Плавне переміщення до розділу зв'язку
  let contact = document.querySelector('.contact');
  
  contact.addEventListener('click', function(event){
      event.preventDefault(); //отмена стандартного обработчика
      document.querySelector('.header__menu').classList.toggle('active');
      document.querySelector('.header__burger').classList.toggle('active');
      let blockId = contact.getAttribute('href');
      document.querySelector(''+blockId).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      })
  });


// Button up
let anchor = document.querySelector('.go-top');

anchor.addEventListener('click', function(event){
    event.preventDefault(); //отмена стандартного обработчика
   
    let blockId = anchor.getAttribute('href');
    document.querySelector(''+blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
});

// Делаем непрозначную / прозрачную кнопку
window.addEventListener('scroll', function(){
    anchor.hidden = (this.pageYOffset < document.documentElement.clientHeight)
});

//Бургер меню
// $(document).ready(function(){
//   $('.header_burger').click(function(event) {
//     $('.header_burger, .header__menu').toggleClass('active')
//   });
// });

let header__burger = document.querySelector('.header__burger');

header__burger.addEventListener('click', function(){
  // $('.header__burger, .header__menu').toggleClass('active');
  document.querySelector('.header__menu').classList.toggle('active');
  header__burger.classList.toggle('active');
});