$("document"). ready(function() {


    $(".slogan").click(function(){
        $(".people_img").toggleClass('people_img_2',3000);
    });

    $(".content p").hover(hightLightPara);
    function hightLightPara() {
        $(this).toggleClass("hightlight")
    }

})