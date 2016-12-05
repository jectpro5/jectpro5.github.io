$("document").ready(function () {

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


    //Слайдер
    $('#slides1').bxSlider({

        alignment: 'horizontal',                          // 'horizontal', 'vertical' - direction in which slides will move
        controls: true,                                   // determines if default 'next'/'prev' controls are displayed
        speed: 1000,                                      // amount of time slide transition lasts (in milliseconds)
        pager: true,                                      // determines if a numeric pager is displayed (1 2 3 4...)
        pager_short: false,                               // determines if a 'short' numeric pager is displayed (1/4)
        pager_short_separator: ' / ',                     // text to be used to separate the short pager
        margin: 70,                                       // if 'horizontal', applies a right margin to each slide, if 'vertical' a
                                                          // bottom margin is applied. example: margin: 50
        next_text: 'next',                                // text to be displayed for the 'next' control
        next_image: 'frcst_img/btn_arrow_right.jpg',  // image to be used for the 'next' control
        prev_text: 'prev',                                // text to be displayed for the 'prev' control
        prev_image: 'frcst_img/btn_arrow_left.jpg',   // image to be used for the 'prev' control
        auto: true,                                       // determines if slides will move automatically
        pause: 2000,                                      // time between each slide transition (auto mode only)
        auto_direction: 'next',                           // order in which slides will transition (auto mode only)
        auto_hover: true,                                 // determines if slideshow will pause while mouse is hovering over slideshow
        auto_controls: true,                              // determines if 'start'/'stop' controls are displayed (auto mode only)
        ticker: false,                                    // determines if slideshow will behave as a constant ticker
        ticker_controls: false,                           // determines if 'start'/'stop' ticker controls are displayed (ticker mode only)
        ticker_direction: 'next',                         // order in which slides will transition (ticker mode only)
        ticker_hover: true,                               // determines if slideshow will pause while mouse is hovering over slideshow
        stop_text: 'Остановить',                          // text to be displayed for the 'stop' control
        start_text: 'Запустить',                          // text to be displayed for the 'start' control
        wrapper_class: 'slides1_wrap'                     // class name to be used for the outer wrapper of the slideshow


    });


    });