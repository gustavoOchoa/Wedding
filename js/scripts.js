(function($){
    "use strict";

    // Preloader
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(350).fadeOut("slow");
    });

    // on ready function
    jQuery(document).ready(function($) {
        var $this = $(window);

        //height forcer
        var hgt = $this.height();
        var wid = hgt/400;
        $('.slider_textinfo').css('height', hgt);
        $('.scroll_wrap .slider_textinfo .image').css('width', 200*wid);
        window.addEventListener("resize", setSizeWindow);
        // Back to Top js
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('#scroll').fadeIn();
            } else {
                $('#scroll').fadeOut();
            }
        });
        $('#scroll').on("click", function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

        // Menu show Hide ya esta
        var counter = 0;
        $('.menu_btn').on("click", function(e){
            if( counter == '0') {
                $('.main_menu_wrapper').addClass('main_menu_hide');
                $(this).children().removeAttr('class');
                $(this).children().attr('class','glyphicon glyphicon-remove');
                counter++;
            }
            else {
                $('.main_menu_wrapper').removeClass('main_menu_hide');
                $(this).children().removeAttr('class');
                $(this).children().attr('class','glyphicon glyphicon-menu-hamburger');
                counter--;
            }
        });

        // Menu js for Position fixed
        $(window).scroll(function(){
            var window_top = $(window).scrollTop() + 1;
            console.log(window_top);
            if (window_top > 490) {
                $('.header_wrapper').addClass('menu_fixed animated fadeInDown');
            } else {
                $('.header_wrapper').removeClass('menu_fixed animated fadeInDown');
            }
        });

        // Single page scroll menu
        $('.single_index_menu ul li a').on('click' , function(e){
            $('.single_index_menu ul li').removeClass('active');
            $(this).parent().addClass('active');
            var target = $('[section-scroll='+$(this).attr('href')+']');
            e.preventDefault();
            var targetHeight = target.offset().top-parseInt('80', 10);

            $('html, body').animate({
                scrollTop: targetHeight
            }, 1000);
        });

        $(window).scroll(function() {
            var windscroll = $(window).scrollTop();
            var target = $('.single_index_menu ul li');
            if (windscroll >= 0) {
                $('[section-scroll]').each(function(i) {
                    if ($(this).position().top <= windscroll + 83) {
                        target.removeClass('active');
                        target.eq(i).addClass('active');
                    }
                });
            }else{
                target.removeClass('active');
                $('.single_index_menu ul li:first').addClass('active');
            }

        });

        //Single page scroll js
        $('.single_index_menu_down ul li a').on('click' , function(e){
            $('.single_index_menu_down ul li').removeClass('active');
            $(this).parent().addClass('active');
            var target = $('[section-scroll='+$(this).attr('href')+']');
            e.preventDefault();
            var targetHeight = target.offset().top-parseInt('83', 10);
            $('html, body').animate({
                scrollTop: targetHeight
            }, 1000);
        });

        $(window).scroll(function() {
            var windscroll = $(window).scrollTop();
            var target = $('.single_index_menu_down ul li');
            if (windscroll >= 0) {
                $('[section-scroll]').each(function(i) {
                    if ($(this).position().top <= windscroll + 83) {
                        target.removeClass('active');
                        target.eq(i).addClass('active');
                    }
                });
            }else{
                target.removeClass('active');
                $('.single_index_menu_down ul li:first').addClass('active');
            }

        });


        //Single page scroll js
        $('.single_index_menu_rsvp a').on('click' , function(e){
            $('.single_index_menu_rsvp a').removeClass('active');
            $(this).parent().addClass('active');
            var target = $('[section-scroll='+$(this).attr('href')+']');
            e.preventDefault();
            var targetHeight = target.offset().top-parseInt('83', 10);
            $('html, body').animate({
                scrollTop: targetHeight
            }, 1000);
        });

        $(window).scroll(function() {
            var windscroll = $(window).scrollTop();
            var target = $('.single_index_menu_rsvp a');
            if (windscroll >= 0) {
                $('[section-scroll]').each(function(i) {
                    if ($(this).position().top <= windscroll + 83) {
                        target.removeClass('active');
                        target.eq(i).addClass('active');
                    }
                });
            }else{
                target.removeClass('active');
                $('.single_index_menu_rsvp a').addClass('active');
            }

        });

    });
})();

function setSizeWindow(){
    // Get width and height of the window excluding scrollbars
    var h = document.documentElement.clientHeight;
    $('.slider_textinfo').css('height', h);
    var wid = h/400;
    $('.scroll_wrap .slider_textinfo .image').css('width', 200*wid);
}