$(document).ready(function() {

    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth > 767)$("#f_r").addClass("pull-right");
        else $("#f_r").removeClass("pull-right");
    });

    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth > 767)$("#f_r").addClass("pull-right");
        else $("#f_r").removeClass("pull-right");
    });
});