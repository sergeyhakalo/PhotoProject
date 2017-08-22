/**
 * Created by sergey on 21.08.17.
 */
$(window).scroll(function () {

    var st = $(this).scrollTop();

    $(".content_header").css({
        "transform": "translate(0%, " + st / 7 + "%"
    });
});


