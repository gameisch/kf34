$(document).ready(function () {
    $('a.anchorLink').click(function () {
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top + (-90)
        }, 500);
        return false;
    });
});
