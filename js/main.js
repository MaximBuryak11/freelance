$(document).ready(function() {
		new WOW().init();
    const swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.projects-pagination',
        bulletClass: 'projects-bullet',
        bulletActiveClass: 'projects-bullet-active',
        clickable: true
      },
    });
    $(".input-phone ").mask("+7 (999) 99-99-999");
});