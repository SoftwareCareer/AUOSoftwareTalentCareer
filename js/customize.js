$(function () {
    /*-----------------------------------*/
    ///////////////置頂go to top////////////
    /*-----------------------------------*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    /*-----------------------------------*/
    /////click event to scroll to top//////
    /*-----------------------------------*/
    $('.scrollToTop')
        .off()
        .click(function (e) {
            $('html, body').animate({ scrollTop: 0 }, 400, 'easeOutExpo');
            e.preventDefault();
        });

    // var burger = $('.mobile_button').find('.btn');
    // sidebar = $('.sidebar');

    // burger.off().click(function (e) {
    //     sidebar.stop().toggleClass('menu-opened');
    //     $(this).blur();
    // });
    $('#btn_jobs')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.jobs').offset().top - 60 }, 800, 'easeOutExpo');
            e.preventDefault();
        });
    $('#btn_what')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.what').offset().top - 60 }, 800, 'easeOutExpo');
            e.preventDefault();
        });
    $('#btn_auo_intro')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.auo_intro').offset().top - 60 }, 800, 'easeOutExpo');
            e.preventDefault();
        });
    $('#btn_grc')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.grc').offset().top - 60 }, 800, 'easeOutExpo');
            e.preventDefault();
        });
    $('#btn_location')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.location').offset().top - 60 }, 800, 'easeOutExpo');
            e.preventDefault();
        });
});
