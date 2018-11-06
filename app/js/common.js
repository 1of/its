$(function() {

    /* MENU MOB */

    $('.btn-mob-wrap').click(function(){
        $('.main-menu').slideToggle();

        $('.main-menu ul li').click(function(){
            $('.main-menu').slideUp();
        });

    });

    /* SLICK SLIDER */

    $('.slider-wrap').slick();


});
