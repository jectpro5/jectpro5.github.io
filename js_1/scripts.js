$("document").ready(function () {

    $('.dropdown-menu li:even').css("background", "#87A9F5");

    //$('.dropdown-menu li[title*=website]').css("font-size", "20px");

    $(".header p").hover(hightLightPara);

    function hightLightPara() {
        $(this).toggleClass("hightlight_1")
    }

    $(".header a").hover(hightLightInput);

    function hightLightInput() {
        $(this).toggleClass("hightlight_2")
    }

    $(".form input").css("border-bottom", "2px solid #e4e4e6");

    $(".form input:last-of-type").css("border", "none");

    // $(".form p:last-of-type").css("margin", "0 !important");

    $("#remove_class").click(function () {
        $("#cont1 p:last-child").removeClass('color');
    });

    $("#datepckr").datepicker();


    $("#theCarousel").carousel();


});
var dates = [];
var first_date = 0;


