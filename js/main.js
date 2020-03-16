
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
      let blockId = catalog.getAttribute('href');
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