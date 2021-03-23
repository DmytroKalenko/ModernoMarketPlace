$(function() {
    var mixer = mixitup('.products__inner__mixitUP');


    //Start____Slick_________Slider
    $('.slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 1600,
        arrows: false,
    });

    //Finish____Slick_________Slider

    //__Start_RATEYO___

    $(".rate__star").rateYo({
        rating: 3.6,
        starWidth: "12px",
        readOnly: true,
    });
    //__Finish_RATEYO___

    // //__Start_Header_User__menu__

    $('.bell, .letter, .user').hide();
    // //___Start____LOGin_in__site__

    // $('.login').on('click', function() {
    //     $('.header__bell, .header__letter, .avatar, .user').show();
    //     $('.login').hide();
    //     $('.header__circle li').addClass('curent');
    // });


    // $('.logout').on('click', function() {
    //     $('.header__bell, .header__letter, .avatar, .user').hide();
    //     $('.login').show();
    //     $('.header__circle li').removeClass('curent');
    // });
    // //___Finish____LOGOUT_in__site__


    // //__start____Header_User__menu__
    // $('.user').on('click', function() {
    //     $('.user').toggleClass("curent");
    //     $('.user__list').slideToggle();
    // });
    // $('.user__list .list__item a').on('click', function() {
    //     $('.user').toggleClass("curent");
    //     $('.user__list').slideToggle();
    // });
    // $('.logout').on('click', function() {
    //     $('.user__list, .basket__list').slideUp();
    // });
    // //__Finish____Header_User__menu__


    // //__start____header__basket__
    // $('.header__basket, .basket__list .close').on('click', function() {
    //     $('.basket__list').slideToggle();

    // });

    // //__finish____header__basket__


});