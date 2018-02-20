$("document").ready(function () {


    $("#datepckr").datepicker();

    $("#theCarousel").carousel();

    $( "#datepicker" ).datepicker({
        numberOfMonths: 2
    });
    $("#navbarSupportedContent").click(function () {
        $("li.nav-item").toggle(".for_toggle")
    });
    $( "#datepicker1" ).datepicker();


    });