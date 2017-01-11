function viewDate(n, element) {
 var now = new Date();
 var  nowMilli = now.getTime();

 var nowPlusN = new Date(1000*60*60*24*n);
 var milliN = nowPlusN.getTime();

 var summaMilli = nowMilli + milliN;
 var itogMoment = new Date(summaMilli);
 var myDays = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
 var myMonth = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень","Вересень","Жовтень","Листопад","Грудень"];

 document.write(" " + "День тижня: " + myDays[itogMoment.getDay()] + ".");
 document.write(" " + "Число: " + itogMoment.getDate() + ".");
 document.write(" " + "Місяць: " + myMonth[itogMoment.getMonth()] + ".");
 document.write(" " + "Рік: " + itogMoment.getFullYear() + "." + "<br>");
 }
 var userDays = prompt ("Введіть число днів від 1 до 1000 - порахуємо, яка дата це буде");
 if (userDays > 1000 || userDays < 1 || isNaN(userDays)) {document.write("Ви ввели неправильне значення!");}
 else { var itog = Math.round(userDays); document.write("<br>" + "Через " + itog + " днів буде ось така дата: "); viewDate(itog, 'for_java_script')}

 var now = new Date();
 var hour = now.getHours();
 var minutes = now.getMinutes();
 var seconds = now.getSeconds();
 if (minutes < 10 ) {minutes = "0" + minutes};
 if (seconds < 10) {seconds = "0" + seconds};
 document.write("Зараз час: " +  hour + ":" + minutes + ":" + seconds + ", ");

 var myDays = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"];
 var now = new Date;
 document.write(" " + myDays[now.getDay()] + ". ");

 var now = new Date();
 var from1970 = (now.getTime()/(1000*60*60*24));
 var ny = new Date (2018, 0, 1, 0, 0, 0);
 var from1970ToNy = (ny.getTime()/(1000*60*60*24));
 document.write(" " + "До нового року залишилось" + (Math.round(from1970ToNy) - Math.round(from1970)) + "днів.");
 var myDays = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"];
 document.write(" " + "Це буде день тижня: " + myDays[ny.getDay()] + "." + "<br>");



$("document").ready(function () {
    $("#box_1").on("click", whenMouseIsClicked).on("mouseleave", whenMouseLeaves);

    function whenMouseIsClicked() {
        $("#box_1").html("<h4>clicked was detected here</h4>");
    }

    function whenMouseLeaves() {
        $("#box_1").html("<h4 id='bcol'>the mouse was detected here</h4>");
    }


    $(".btn_1_in").on("click", function () {
        $("#box_2").fadeIn(3000);
    });
    $(".btn_2_in").on("click", function () {
        $("#box_2").fadeOut(2000);
    });


    $(".paragr").hover(hightLightPara);
    function hightLightPara() {
        $(this).toggleClass("hightlight")
    }

    $("#toggleThis").click(function () {
        $("#para_1").toggle(4000, "linear")
    })

    $("#slideDown").click(function () {
        $("#para_2").slideUp(4000, "linear").slideDown(4000, "linear")
    })


    $("#doManySings").click(function (e) {
        e.preventDefault();
        $("#box_4").animate({width: "500px", marginLeft: "100px", fontSize: "30px"}, 1000);
    })

    $(".selectrs_1").css("border", "3px solid red");

    //$("#cont p:first").css("border", "3px solid blue");
    //$("#cont p:last").css("border", "3px solid yellow");
    //$("#cont p:even").css("border", "3px solid blue");
    $("#cont p:odd").css("border", "3px solid blue");

    // $("div>p").css("border", "3px solid red");
    $("div>p.secnd").css("border", "4px solid purple");
    $("div+ul").css("border", "2px solid green");
    $(".secnd+p").css("border", "1px solid red");

    $("#cont1 p:first-child").css("border", "4px solid green");
    //$("#cont1 p:last-of-type").css("border", "4px solid black");
    $("div:has(p[class=secnd])").css("border", "1px solid brown");
    $("p:contains('Edvin')").css("border", "1px solid orange");

    $("#append").click(function () {
        $("#cont1 p:first-child").append("hello");
    });
    $("#prepend").click(function () {
        $("#cont1 p:last-child").prepend("hello again from me");
    });

    // $("p").after("##")
    //$("p").before("^^");

    $("#cont1 p:first").wrap("<div id='red'>");

    $("#add_class").click(function () {
        $("#cont1 p:last-child").addClass('color');
    });
    $("#remove_class").click(function () {
        $("#cont1 p:last-child").removeClass('color');
    });
    $("#toggle_class").click(function () {
        $("#cont1 p:last-child").toggleClass('color');
    });
    $("#increase_size").click(function () {
        $("#cont1 p:last-of-type").css("font-size", "+=1px");
    });

    $("#cont1 p:first").next().css("border", "2px solid red");

    $("#for_vacation").click(function () {

        answer = confirm('Чи хотiли б Ви зараз дiзнатися, скiльки коштує вiдпустка там, де зараз тепло?');
        if (answer) {
            var vacTour = {Turkey: 900, Spain: 1400, Egept: 600};
            vacTour.calc = function (peoples, days, country) {
                res = peoples * days * this[country];
                return res;
            };
            var peop = prompt("Скiльки вас поїде?");
            var day = prompt("Скiльки днiв Ви хочете вiдпочивати?");
            var countr = prompt("Куди Ви хочете поїхати?", "Turkey, Spain, Egept");
           alert("Вартiсть поїздки буде така: " + vacTour.calc(peop, day, countr) + " гривень.");
        }


    });
});


//$('#for_java_script').text("У вас все получилось");

//document.getElementById('for_java_script').innerHTML="У вас все получилось";








