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

    var burger = $('.mobile_button').find('.btn');
    sidebar = $('.sidebar');

    burger.off().click(function (e) {
        sidebar.stop().toggleClass('menu-opened');
        $(this).blur();
    });
});
