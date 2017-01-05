/*$(document).ready(function () {
 $(window).resize(function () {
 var windowWidth = $(window).width();
 if (windowWidth > 767) $("#f_r").addClass("pull-right");
 else $("#f_r").removeClass("pull-right");
 });
 $(window).resize(function () {
 var windowWidth = $(window).width();
 if (windowWidth > 767) $("#footer_left").addClass("pull-left");
 else $("#footer_left").removeClass("pull-left");
 });
 });
 function myFunction() {
 if ($(window).width() > 767) {
 $("#footer_left").addClass("pull-left");
 }
 else {
 $("#footer_left").removeClass("pull-left");
 }
 }
 */
$(document).ready(function () {

      /* $('.for_img img').append('Hello!');

    $('.for_img div').addClass('neww');
    $(function (){
        $('neww').before('<p>Новый параграф</p>');
    });
    $('.for_img > div').html('<div class="img_in"></div>');
    $('.for_img img').prepend('<div class="img_in"></div>');*/
    //$('.for_img img').before($('<div class="img_in"></div>'));
   // $('.for_img img').addClass('neww');
    $('.for_img > div').prepend('<div class="img_in"></div>');
    $('.img_in').prepend('<div class="txt_in"></div>');

    $('.txt_in').hover(

        function () {
            $(this).css({"background-color":"red"});
        },

        function () {
            $(this).css({"background-color":"blue"});
        }
    );
});
