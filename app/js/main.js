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
        responsive: [{
                breakpoint: 2045,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1548,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,

                }
            },
        ]
    });

    //Finish____Slick_________Slider

    //__Start_RATEYO___
    $('.logout').hide();
    $(".rate__star").rateYo({
        rating: 3.6,
        starWidth: "12px",
        readOnly: true,
    });
    //__Finish_RATEYO___

    // //__Start_Header_User__menu__
    $('.bell, .letter, .user').hide();
    $('.logout').on('click', function() {
        $('.bell, .letter, .user, this').hide();
    });

    $('.login').on('click', function() {
        $('.bell, .letter, .user, .logout').show();
    });
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

    //____start_______animation___for__bloks____
    const bloks = document.querySelectorAll(".bloks a");
    const bloks2 = Array.from(bloks);
    const Counter = document.querySelector(".blok__title span[id=counter]");


    function scrollAnim() {
        for (i = 0; i < bloks2.length; i++) {

            const blokHeight = bloks2[i].offsetHeight;

            const blokOffset = offset(bloks2[i]).top;

            const animStart = 4;

            let animationPoint = window.innerHeight - blokHeight / animStart;

            if ((pageYOffset > blokOffset - animationPoint) && pageYOffset < (blokOffset + blokHeight)) {
                bloks2[i].classList.add("active");

            } else {
                if (bloks2[i].classList.contains(".bloks__item")) {
                    bloks2[i].classList.remove("active");
                };


            }
        };
    };
    setTimeout(() => {
        scrollAnim();
    }, 1000);
    window.addEventListener("scroll", scrollAnim);

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollTop = window.pageXOffset || document.documentElement.scrollTop,
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        return { top: rect.top + scrollTop, left: rect.left + screenLeft }
    };
    //____finish_______animation___for__bloks____

    //____start_______animation___for__counter____

    // function ToMove(num = 2000) {
    //     const time = 4000;
    //     const step = 1;

    //     n = 0;
    //     let t = Math.round(time / (num / step));
    //     let interval = setInterval(() => {
    //         n = n + step;
    //         if (n == num) {
    //             clearInterval(interval);
    //         };
    //         Counter.innerHTML = n;
    //     }, t)
    // };
    // ToMove()

    var number = document.querySelector('#counter'),
        numberTop = number.getBoundingClientRect().top,
        start = +number.innerHTML,
        end = +number.dataset.max;

    window.addEventListener('scroll', function onScroll() {
        if (window.pageYOffset > numberTop - window.innerHeight / 2) {
            this.removeEventListener('scroll', onScroll);
            var interval = setInterval(function() {
                number.innerHTML = ++start;
                if (start == end) {
                    clearInterval(interval);
                }
            }, 5);
        }
    });








    //____finish_______animation___for__counter____

    var mixer = mixitup('.products__inner__mixitUP', {
        animation: {
            effects: 'fade translateZ(-100px)'
        },
    });




});