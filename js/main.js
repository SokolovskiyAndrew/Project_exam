// $(function () {

//     $('.slick', '.vertical-slider').slick({
//         vertical: true,
//         verticalSwiping: true,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinity: true,
//         dots: true,
//         prevArrow: '.slick-prev',
//         nextArrow: '.slick-next',
//     });

// });

$(function () {

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 820,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 578,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1
            }
        }
        ]
    });
});

$(function () {
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 3,
        slidesToShow: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            998: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            550: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            }

        }
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                spaceBetween: 30,
                navigation: {
                    nextEl: '.swiper-button-disabled',
                    prevEl: '.swiper-button-disabled',
                },
            },
            799: {
                spaceBetween: 20,
            }
        }

    });
});

// $(document).ready(function () {
//     new WOW().init();
// });

// 