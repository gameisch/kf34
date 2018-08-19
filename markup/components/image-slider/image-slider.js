$(document).ready(function () {
    $('.image-slider__slider').each(function () {
        let swiperContainer = $(this).find('.swiper-container')[0],
            generalBlock = $(this).parents('.image-slider'),
            isAutoplay = generalBlock.data('autoplay'),
            isLoop = generalBlock.data('loop');

        let imageSlider = new Swiper(swiperContainer, {
            loop: isLoop,
            autoplay: isAutoplay,
            slidesPerView: 3,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        });
    });
});
