$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            items: 2,
            nav: true,
            loop: true,
            navText: [$('.am-next'),$('.am-prev')],
            margin: 10,
            
    });
  });

  const mediaQuery = window.matchMedia('(max-width: 865px)')
if (mediaQuery.matches) {
    $(".owl-carousel").owlCarousel(
        {
            items: 1,
            nav: true,
            loop: true,
            navText: [$('.am-next'),$('.am-prev')]
    });
}