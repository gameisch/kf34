$(document).ready(function () {
    const sliderContainer = $('.infoblock-2s-image-slider');
    const lengSlides = $('.infoblock-2s-image-slider > .swiper-wrapper > .swiper-slide');
    if (lengSlides.length > 1) {
        const swiper = new Swiper(sliderContainer, {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
                clickable: true,
                hide: true
            }
        });
    } else {
        return false;
    }
});
