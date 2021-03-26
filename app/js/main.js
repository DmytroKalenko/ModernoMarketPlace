$(function() {
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
    // //__finish____header__basket__



    // START_Tabs__


    $('.tab1').on('click', function() {
        $('.tab__content1').show();
        $('.tab1').addClass('current');

        $('.tab__content2, .tab__content3, .tab__content4').removeClass('current');
        $('.tab2, .tab3, .tab4').removeClass('current');

    });
    $('.tab2').on('click', function() {
        $('.tab__content2').addClass('current');
        $('.tab2').addClass('current');

        $('.tab__content3, .tab__content4 ').removeClass('current');
        $('.tab__content1').hide();
        $('.tab1, .tab3, .tab4').removeClass('current');
    });

    $('.tab3').on('click', function() {
        $('.tab__content3').addClass('current');
        $('.tab3').addClass('current');

        $('.tab__content2, .tab__content4 ').removeClass('current');
        $('.tab__content1').hide();
        $('.tab2, .tab1, .tab4').removeClass('current');
    });

    $('.tab4').on('click', function() {
        $('.tab__content4').addClass('current');
        $('.tab4').addClass('current');

        $('.tab__content3, .tab__content2 ').removeClass('current');
        $('.tab__content1').hide();
        $('.tab2, .tab3, .tab1').removeClass('current');
    });


    //__finish_____Tabs__

    var mixer = mixitup('.products__inner__mixitUP');
});