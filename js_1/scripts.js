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

function initDatepicker(col_calendars) {
    var calendar = pickmeup('#calendar_input', {
        position: 'bottom',
        hide_on_select: true,
        class_name: 'calendar',
        first_day: 0,
        mode: 'range',
        date: [],
        calendars: col_calendars,
        render: function (date) {
            if (String(date) == String(dates[1]) && (String(dates[0]) != String(dates[1]))) {
                return {class_name: 'last-day'};
            }
            return {};
        }
    });
}

//Default func
function initDef() {
    if ($(window).width() >= 768) {
        pickmeup('#calendar_input').destroy();
        initDatepicker(2);
        // Delete slick, if slick initialized
        if ($('.program-slider').hasClass('slick-initialized')) $('.program-slider').slick('unslick');
        // for desktop delete modal functionality from filters (filters page)
        $('#exampleModalLong').removeClass("modal fade").css('display', 'block');
    } else {
        // init slick slider
        $('.program-slider').not('.slick-initialized').slick({
            infinite: true,
            slidesToShow: 2,
            centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            responsive: [{
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        });
        pickmeup('#calendar_input').destroy();
        initDatepicker(1);
        $('#exampleModalLong').addClass("modal fade").css('display', 'none');
    }
}

$(document).ready(function () {
    initDef();
    $.widget("custom.iconselectmenu", $.ui.selectmenu, {
        _renderItem: function (ul, item) {
            var li = $("<li>", {text: item.label});
            if (item.disabled) {
                li.addClass("ui-state-disabled");
            }
            $("<span>", {
                style: item.element.attr("data-style"),
                "class": "ui-icon " + item.element.attr("data-class")
            })
                .appendTo(li);
            return li.appendTo(ul);
        }
    });
    $("#car_model")
        .iconselectmenu()
        .iconselectmenu("menuWidget")
        .addClass("ui-menu-icons avatar");
    // For adding class last day
    $('#calendar_input').on('pickmeup-change', function (e) {
        dates = e.detail.date;
    })
    $('.list-inline-item').on("click", function () {
        $('.pmu-selected').last().addClass("last-day");
    });
    // init isotope.js
    $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: 1
        }
    });
});

$(window).resize(
    function () {
        initDef();
    }
);