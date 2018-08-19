$(document).ready(function () {
    $('.contacts-form__reset-button').click(function () {
        setTimeout(function () {
            $('.contacts-form').find('select, input').trigger('refresh');
        }, 200);
    });
});
