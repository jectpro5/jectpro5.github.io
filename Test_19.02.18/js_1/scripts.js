
$("document").ready(function () {

    $("#datepckr").datepicker();

    $("#theCarousel").carousel();

    $("#datepicker").datepicker({
        numberOfMonths: 2
    });

    $("#navbarSupportedContent i.ion-navicon-round").click(function () {
        $("#for_visiblty").toggle(".for_toggle")
    });
    $("#datepicker1").datepicker();

});

