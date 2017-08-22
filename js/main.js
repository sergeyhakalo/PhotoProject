/**
 * Created by sergey on 21.08.17.
 */
$(document).ready(function () {

    $("#menu_icon").click(function () {
        $("header nav ul").toggleClass("show_menu");
        $("#menu_icon").toggleClass("close_menu");
        return false;
    });
});

$(document).ready(function () {
    $("body").css("display", "none").fadeIn("500");
});





