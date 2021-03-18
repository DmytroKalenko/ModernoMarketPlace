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
});