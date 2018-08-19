$(document).ready(function () {
    const $modalRse = $('.rse');
    const $modalRe = $('.re');
    const $serpModalRe = $('.serp-item__request');
    const $modalRpm = $('.rpm');
    const $modalRsc = $('.rsc');
    const $modalRsq = $('.rsq');
    const $modalSt = $('.st');
    const $modalStore = $('.storage');
    const $modalTrans = $('.transportation');
    const $modalReg = $('.reg');
    const $modalParts = $('.rp');
    const $modClose = $('.modal-content__close');
    const $body = $('body');
    const modal = function (id) {
        const $moData = $('.modal[data-modal=' + id + ']');

        if ($moData.length < 1) {
            return;
        }
        this.open = function () {
            $moData.addClass('modal--open').fadeIn(300);
            $body.addClass('modal-has-opened');
        };
        this.close = function () {
            $moData.removeClass('modal--open').fadeOut(300);
            $body.removeClass('modal-has-opened');
        };
        return this;
    };

    $modalRse.on('click', function (e) {
        e.preventDefault();
        modal('rse').open();
    });
    $modalRe.on('click', function (e) {
        e.preventDefault();
        modal('r-rental').open();
        $('#rent_some1').attr('checked', 'checked');
    });
    $serpModalRe.on('click', function (e) {
        e.preventDefault();
        modal('r-rental').open();
        $('#rent_some1').attr('checked', 'checked');
    });
    $modalReg.on('click', function (e) {
        e.preventDefault();
        modal('reg').open();
    });
    $modalRpm.on('click', function (e) {
        e.preventDefault();
        modal('rpm').open();
    });
    $modalRsc.on('click', function (e) {
        e.preventDefault();
        modal('rsc').open();
    });
    $modalRsq.on('click', function (e) {
        e.preventDefault();
        modal('rsq').open();
    });
    $modalParts.on('click', function (e) {
        e.preventDefault();
        modal('rp').open();
    });
    $modalSt.on('click', function (e) {
        e.preventDefault();
        modal('st').open();
    });
    $modalStore.on('click', function (e) {
        e.preventDefault();
        modal('storage').open();
    });
    $modalTrans.on('click', function (e) {
        e.preventDefault();
        modal('transportation').open();
    });
    getFileParam = function () {
        try {
            var file = document.getElementById('uploaded-file1').files[0];

            if (file) {
                var fileSize = 0;

                if (file.size > 1024 * 1024) {
                    fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
                } else {
                    fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
                }

                document.getElementById('file-name1').innerHTML = 'File name: ' + file.name;
                document.getElementById('file-size1').innerHTML = 'File size: ' + fileSize;

                if (/\.(jpe?g|bmp|gif|png)$/i.test(file.name)) {
                    var elPreview = document.getElementById('preview1');
                    elPreview.innerHTML = '';
                    var newImg = document.createElement('img');
                    newImg.className = 'preview-img';

                    if (typeof file.getAsDataURL === 'function') {
                        if (file.getAsDataURL().substr(0, 11) === 'data:image/') {
                            newImg.onload = function () {
                                document.getElementById('file-name1').innerHTML += ' (' + newImg.naturalWidth + 'x' + newImg.naturalHeight + ' px)';
                            };
                            newImg.setAttribute('src', file.getAsDataURL());
                            elPreview.appendChild(newImg);
                        }
                    } else {
                        var reader = new FileReader();
                        reader.onloadend = function (evt) {
                            if (evt.target.readyState === FileReader.DONE) {
                                newImg.onload = function () {
                                    document.getElementById('file-name1').innerHTML += ' (' + newImg.naturalWidth + 'x' + newImg.naturalHeight + ' px)';
                                };
                                newImg.setAttribute('src', evt.target.result);
                                elPreview.appendChild(newImg);
                            }
                        };

                        var blob;
                        if (file.slice) {
                            blob = file.slice(0, file.size);
                        } else if (file.webkitSlice) {
                            blob = file.webkitSlice(0, file.size);
                        } else if (file.mozSlice) {
                            blob = file.mozSlice(0, file.size);
                        }
                        reader.readAsDataURL(blob);
                    }
                }
            }
        } catch (e) {
            const filed = $('uploaded-file1').value();
            const fileS = filed.replace(/\\/g, '/').split('/').pop();
            document.getElementById('file-name1').innerHTML = 'File: ' + fileS;
        }
    };
    $('.ajax-category').on('click', $modalRe, function (e) {
        e.preventDefault();
        modal('r-rental').open();
    });
    $('.exp').change(function (x) {
        $('.modal-form').siblings('.hidden').hide();
        x.preventDefault();
        const selected = $('.typeof:selected').val();
        const subTypeSlctd = $('.exp .subtypeof:selected').val();
        const subSubTypeSlctd = $('.subtype .subtypeof:selected').val();
        var $this = $(this).val();
        setTimeout(500);
        const $dataOfselect = $('.hidden[data-open="' + selected + '"]');
        const $dataOfsubType = $('.subhidden[data-open="' + subTypeSlctd + '"]');
        const $dataOfSubSubType = $('.subsubhidden[data-open="' + subSubTypeSlctd + '"]');
        if ($this === selected) {
            $dataOfselect.css('display', 'flex');
            $('.subhidden').hide();
            $dataOfSubSubType.hide();
            console.log($this);
            $dataOfselect.nextAll('.hidden').hide();
            $dataOfselect.prevAll('.hidden').hide();
        }
        if ($this === subTypeSlctd) {
            $dataOfsubType.css('display', 'flex');
            $dataOfSubSubType.css('display', 'flex');
            $('.hidden').hide();
            console.log($this);
            $dataOfsubType.nextAll('.subhidden').hide();
            $dataOfsubType.prevAll('.subhidden').hide();
        } else {
            $dataOfsubType.nextAll('.subhidden').hide();
            $dataOfsubType.prevAll('.subhidden').hide();
        }
    });
    $('.subtype').change(function (x) {
        x.preventDefault();
        var $this = $(this).val();
        const subSubTypeSlctd = $('.subtype .subtypeof:selected').val();
        setTimeout(500);
        const $dataOfSubSubType = $('.subsubhidden[data-open="' + subSubTypeSlctd + '"]');
        if ($this === subSubTypeSlctd) {
            $dataOfSubSubType.css('display', 'flex');
            console.log($this);
            $dataOfSubSubType.nextAll('.subsubhidden').hide();
            $dataOfSubSubType.prevAll('.subsubhidden').hide();
        } else {
            $dataOfSubSubType.nextAll('.subsubhidden').hide();
            $dataOfSubSubType.prevAll('.subsubhidden').hide();
        }

    });
    function msieversion() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        if ( msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) ) {
            console.log('msie');
            $body.addClass('useragentMsIE');
            $modClose.on('click', function () {
                // fix for ie
                $('.modal').removeClass('modal--open').fadeOut(300);
                $body.removeClass('modal-has-opened');
                // end
                $('.modal-form').trigger('reset');
                $('.modal-content .product-info__title').empty();
                $('.modal-content .product-info__details').empty();
                $('.modal-content .product-info__cat').empty();
                $('.hidden').hide();
                $('.subhidden').hide();
                $('.subsubhidden').hide();
                $('.req').hide();
            });
        } else {
            console.log(ua);
            $modClose.on('click', function () {
                modal($(this).parents('.modal').data('modal')).close();
                $('.modal-form').trigger('reset');
                $('.modal-content .product-info__title').empty();
                $('.modal-content .product-info__details').empty();
                $('.modal-content .product-info__cat').empty();
                $('.hidden').hide();
                $('.subhidden').hide();
                $('.subsubhidden').hide();
                $('.req').hide();
            });
        }// If another browser, return 0
        return false;
    }
    msieversion();
});

