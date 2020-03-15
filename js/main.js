
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

