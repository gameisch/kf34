$(document).ready(function () {
    var selectDefaultHeight = $('#selectBox').height();
    if ($(window).width() <= 1140) {
        $('#selectBox > .valueTag').on('click', function () {
            var currentHeight = $('#selectBox').height();
            if (currentHeight < 100 || currentHeight === selectDefaultHeight) {
                $('#selectBox').height('400px');
            }
            if (currentHeight >= 400) {
                $('#selectBox').height(selectDefaultHeight);
            }
        });
    } else {
        $('#selectBox > .valueTag').on('click', function () {
            var currentHeight = $('#selectBox').height();
            if (currentHeight < 100 || currentHeight === selectDefaultHeight) {
                $('#selectBox').height('550px');
            }
            if (currentHeight >= 550) {
                $('#selectBox').height(42);
            }
        });
    }
    $('li.option').on('click', function () {
        $('#selectBox').height(selectDefaultHeight);
        $('.valueTag').text($(this).text());
    });
    $(document).mouseup(function (e) {
        var containerMenu = $('#selectBox');
        if (containerMenu.has(e.target).length === 0) {
            containerMenu.height(selectDefaultHeight);
        }
    });

});
function goBack() {
    window.history.back();
}
