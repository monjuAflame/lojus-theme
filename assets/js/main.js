(function($){
	"use strict";
    
	// sticky menu
    $(".topSectionHeader").sticky({topSpacing:0});
    
    // Smoth Scroll 
    $('.smoth-menu a, a.smoth-menu').bind('click',function(event){
        var $anchor = $(this);
        var headerH = '60';

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1000, 'easeInOutExpo');
        event.easeInOutExpo();
    });
    
    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
            target: '.mainMenuDesktop'
    });

    // CountUp
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

    // Slick Slider
      $('.screenShotSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '',
        responsive: [
            {
              breakpoint: 450,
              settings: {
                dots: false,
                slidesToShow: 3,  
                centerPadding: '0px',
                }
            },
            {
              breakpoint: 420,
              settings: {
                autoplay: true,
                dots: false,
                slidesToShow: 1,
                centerMode: false,
                }
            }
        ]
    });


     


    // Mobile menu class remove
    $('.mainMenuMobile ul.navbar-nav li').on('click', function(){
        $('.navbar-collapse').removeClass('show');
    });

    
    
	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');

}(jQuery));