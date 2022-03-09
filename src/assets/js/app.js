$(window).on('load', function () {
    $('#preloader').removeClass('visible');
    $('body').addClass('init');
});

$(document).ready(function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });

    $(document).on('mousemove', '#chat', function (e) {
        $(this).addClass('active');
        let pos = $(this).offset();
        let elem_left = pos.left;
        let elem_top = pos.top;

        let Xinner = e.pageX - elem_left;
        let Yinner = e.pageY - elem_top;
        $(this).find('span').css({ 'left': Xinner, 'top': Yinner });
    });
    $(document).on('mouseleave', '#chat', function (e) {
        $(this).removeClass('active');
    });

    // $('.video__button').on('click', function (e) {
    //     e.preventDefault();
    //     $(this).prev('video')[0].play();
    //     $(this).hide();
    // });

    // $('.video video').on('click', function (e) {
    //     if ($(this).hasClass('playing')) {
    //         this.pause();
    //         $(this).removeClass('playing');
    //         $('#cursor').removeClass('paused');
    //     } else {
    //         this.play();
    //         $(this).addClass('playing');
    //         $('#cursor').addClass('paused');
    //     }
    // });

    $('#thanks').mouseup(function (e) { 
        if (!$(".modal__block").is(e.target) && $(".modal__block").has(e.target).length === 0) { 
            $('.modal').fadeOut();
        }
    });

    // menu cursor
    $('.menu__item').on('mousemove', function () {
        let parent = $(this).parent().parent('.menu');
        let left = $(this).offset().left - parent.offset().left;
        let top = $(this).offset().top - parent.offset().top;
        let width = $(this).width();
        $('.menu__hover').addClass('init').css({
            'left': left,
            'top': top,
            'width': width
        });
    });
    $('.menu__list').on('mouseleave', () => {
        $('.menu__hover').removeClass('init');
    });
    $(document).on('mouseleave', '.menu__item', function (e) {
        $(this).removeClass('active');
        $('.menu__hover').removeClass('init');
    });

    // menu + portfolio menu
    $(document).on('mousemove', '.menu__item', function (e) {
        $(this).addClass('active');
        let pos = $(this).offset();
        let elem_left = pos.left;
        let elem_top = pos.top;
      
        let Xinner = e.pageX - elem_left;
        let Yinner = e.pageY - elem_top;
        $(this).find('span').css({ 'left': Xinner, 'top': Yinner });
    });

    // menu cursor
    
    $('input[type="tel"]').on('focus', function () {
        $(this).parent().addClass('focus');
        let val = $(this).val();
        if (val == '') {
            $(this).val('+');
        }
    });
    $('input[type="tel"]').on('blur', function () {
        $(this).parent().removeClass('focus');
        let val = $(this).val();
        if (val == '' || val == '+') {
            $(this).val('');
        }
    });
    $('.callback input').on('change keyup', function () {
        console.log($(this).val());
        if ($(this).val() !== '' && $(this).val() !== '+') {
            $('.callback__submit').removeClass('disabled');
        } else {
            $('.callback__submit').addClass('disabled');
        }
    });

});

//marquee
// $('#marquee_1').marquee({
//     duration: 50000,
//     startVisible: true,
//     duplicated: true,
//     gap: 0,
//     direction: 'right'
// });

// $('#marquee_2').marquee({
//     duration: 50000,
//     startVisible: true,
//     duplicated: true,
//     gap: 0
// });
//marquee

// scroll-down
$('.main__link.first a').on('click', function () {
    let elem = $(this).attr('href'),
    target = $(elem).offset().top;
    $('html, body').animate({ scrollTop: target }, 1500);
});
