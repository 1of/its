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

    /* TABS */

    $('.tab-link').click(function(){
        if(!$(this).hasClass('target-link')) {
            $('.tab-link').removeClass('target-link');
            $(this).addClass('target-link');
        }
    });

});
