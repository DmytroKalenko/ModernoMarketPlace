$(function() {
    //Start____Slick_________Slider
    $('.slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 800,
        draggable: false,
        waitForAnimate: false,
      
        
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


    //_____start_____skillbar___
    $('.skillbar__item').each(function() {
        let skill_percent = $(this).attr('data-percent');
        $(this).find('.skillbar__progres').width(skill_percent);
        $(this).find('.skillbar__percent').html(skill_percent);
    });
    //_____finish___skillbar___

    //_____start_____bar_on__Setting--page__
    $('ul .personal__info').on('click', function() {
        $('.personal__info__content').addClass('current');
        $(this).addClass('current');

        $('.profile__content, .badges__content, .e-mail__content, .social__content').removeClass('current');
        $('.profile, .badges, .e-mail, .social ').removeClass('current');
    });


    $('ul .profile').on('click', function() {
        $('.profile__content').addClass('current');
        $(this).addClass('current');

        $('.personal__info__content, .badges__content, .e-mail__content, .social__content').removeClass('current');
        $('ul .personal__info, .badges, .e-mail, .social ').removeClass('current');
    });

    $('ul .badges').on('click', function() {
        $('.badges__content').addClass('current');
        $(this).addClass('current');

        $('.personal__info__content, .profile__content, .e-mail__content, .social__content').removeClass('current');
        $('ul .personal__info, .profile, .e-mail, .social ').removeClass('current');
    });

    $('ul .e-mail').on('click', function() {
        $('.e-mail__content').addClass('current');
        $(this).addClass('current');

        $('.personal__info__content, .profile__content, .badges__content, .social__content').removeClass('current');
        $('ul .personal__info, .profile, .badges, .social ').removeClass('current');
    });

    $('ul .social').on('click', function() {
        $('.social__content').addClass('current');
        $(this).addClass('current');

        $('.personal__info__content, .profile__content, .badges__content, .e-mail__content').removeClass('current');
        $('ul .personal__info, .profile, .badges, .e-mail').removeClass('current');
    });

    //_____finish_____bar_on__Setting--page__






    var mixer = mixitup('.products__inner__mixitUP', {
        animation: {
            effects: 'fade translateZ(-100px)'
        },
    });




});