$(document).ready(function() {

    $('.galery-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.galery-row'
    });
    $('.galery-row').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.galery-slide',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

});