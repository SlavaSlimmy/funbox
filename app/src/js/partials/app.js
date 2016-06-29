var hoverText = [
    'Котэ не одобряет?',
    'Сказочное заморское яство'
];

$(function() {
    $(".pack, .pack-link").on("click", function (e) {
        e.preventDefault();
        var target = $(this).closest('.packs__item');
        if ($(target).hasClass('packs__item_disabled')) {
            return false;
        }
        $(target).find('.packs__text').toggleClass('packs__text_show').toggleClass('packs__text_hide');
        $(target).find('.pack__subtitle').removeClass("pack__subtitle_hover").html(hoverText[1]);
        if ($(target).hasClass('packs__item_selected')) {
            $(target).removeClass('packs__item_selected');
            $(target).removeClass('packs__item_selected-no-hover');
        } else {
            $(target).addClass('packs__item_selected');
            if ($(this).is(".pack")) {
                $(target).addClass('packs__item_selected-no-hover');
            }
        }
    });
});

$(function() {
    $(".pack").hover(
        function() {
            var target = $(this).closest('.packs__item');
            if ($(target).hasClass('packs__item_selected')) {
                $(this).find('.pack__subtitle').addClass("pack__subtitle_hover").html(hoverText[0]);
            }
        },
        function () {
            var target = $(this).closest('.packs__item');
            if ($(target).hasClass('packs__item_selected')) {
                $(this).find('.pack__subtitle').removeClass("pack__subtitle_hover").html(hoverText[1]);
            }
        }
    );
});

$(function() {
    $(".pack").mouseleave(function(){
        $(this).closest('.packs__item').removeClass('packs__item_selected-no-hover');
    });
});