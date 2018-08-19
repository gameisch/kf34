$(document).ready(function () {
    let header = $('.header'),
        search = $('.search'),
        headerHeight,
        searchHeight,
        updatePadding = function () {
            headerHeight = header.height() + parseFloat(header.css('padding-top')) * 2;
            searchHeight = search.height() + parseFloat(search.css('padding-top')) * 2;
            $('body').css('padding-top', headerHeight + searchHeight);
        };

    $(window).resize(updatePadding).trigger('resize');

    $(window).scroll(function () {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > headerHeight) {
            header.addClass('header--fixed');
        } else {
            header.removeClass('header--fixed');
        }
    });

    let menu = $('.header__menu');
    $('.header__trigger').on('click', function () {
        menu.addClass('header__menu--open');
    });
    $('.header__menuClose').on('click', function () {
        menu.removeClass('header__menu--open');
    });

    setTimeout(updatePadding, 500);
});
