$(window).on('load', function () {
    $('#preloader').removeClass('visible');
    $('body').addClass('init');
});

$(document).ready(function () {
    const caseSlider = new Swiper('.swiper', {
        speed: 1000,
        effect: 'fade',
        loop: 'true',
        autoplay: {
            delay: 3000,
        },
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.slider__next',
            prevEl: '.slider__prev',
        },
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

    // portfolio tabs 
    $('.works__menu .menu__item').on('click', function(e) {
        e.preventDefault();
        $('.works__menu .menu__item').removeClass('active');
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
        let items = $(this).attr('data-work');
        let elem = $('.works').find('[data-items = "' + items + '"]'); 
        console.log(items);
        $('.works__list').fadeOut();
        elem.fadeIn();
        elem.addClass('active');
    });
    // portfolio tabs 

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
        $('.menu__hover').removeClass('init');
    });
    // menu + portfolio menu
    $(document).on('mousemove', '.menu__item', function (e) {
        let pos = $(this).offset();
        let elem_left = pos.left;
        let elem_top = pos.top;
      
        let Xinner = e.pageX - elem_left;
        let Yinner = e.pageY - elem_top;
        $(this).find('span').css({ 'left': Xinner, 'top': Yinner });
    });
    // menu cursor

    $('.mode').on('click', function () {
        if( $('.body-wrapper').hasClass('night') ) {
            $('.body-wrapper').removeClass('night');
            $('.header').removeClass('dark');
            $('.main__link .button').addClass('button--dark');
        } else {
            $('.body-wrapper').addClass('night');
            $('.header').addClass('dark');
            $('.main__link .button').removeClass('button--dark');
        }
    });
    
    // scroll-down
    $('.scroll-down').on('click', function () {
        target = $('.main').height();
        $('html, body').animate({ scrollTop: target }, 1000);
    });
    
    $('.menu__item a').on('click', function () {
        let elem = $(this).attr('href'),
        target = $(elem).offset().top;
        $('html, body').animate({ scrollTop: target }, 1000);
    });
});

