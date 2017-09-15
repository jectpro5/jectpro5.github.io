function viewDate(n, element) {
    var now = new Date();
    var nowMilli = now.getTime();

    var nowPlusN = new Date(1000 * 60 * 60 * 24 * n);
    var milliN = nowPlusN.getTime();

    var summaMilli = nowMilli + milliN;
    var itogMoment = new Date(summaMilli);
    var myDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var myMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.write(" " + "Day of the week: " + myDays[itogMoment.getDay()] + ".");
    document.write(" " + " Number: " + itogMoment.getDate() + ".");
    document.write(" " + " Month: " + myMonth[itogMoment.getMonth()] + ".");
    document.write(" " + "Year: " + itogMoment.getFullYear() + "." + "<br>");
}

var userDays = prompt("Enter the number of days from 1 to 1000, and JS function will calculate, that date it will be / Введіть число днів від 1 до 1000 - порахуємо, яка дата це буде");
if (userDays > 1000 || userDays < 1 || isNaN(userDays)) {
    document.write("You entered an invalid value!" + "<br>");
}
else {
    var itog = Math.round(userDays);
    document.write("<br>" + "After " + itog + " days will be here this date: ");
    viewDate(itog, '#for_java_script')
}


var now = new Date();
var hour = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
if (minutes < 10) {
    minutes = "0" + minutes
}
;
if (seconds < 10) {
    seconds = "0" + seconds
}
;
document.write("Now is the time: " + hour + ":" + minutes + ":" + seconds + ", ");

var myDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var now = new Date;
document.write(" " + myDays[now.getDay()] + ". ");

var now = new Date();
var from1970 = (now.getTime() / (1000 * 60 * 60 * 24));
var ny = new Date(2018, 0, 1, 0, 0, 0);
var from1970ToNy = (ny.getTime() / (1000 * 60 * 60 * 24));
document.write(" Until the New Year - " + (Math.round(from1970ToNy) - Math.round(from1970)) + "days.");
var myDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.write(" " + "This will be next day of the week: " + myDays[ny.getDay()] + "." + "<br>");

function rotateLeft(){
    var angle = ($('#foo').data('angle')) || 0;
    angle -= 45;
    $('#foo').css({'transform': 'rotate(' + angle + 'deg)'});
    $('#foo').data('angle', angle);
}

function rotateRight(){
    var angle = ($('#foo').data('angle')) || 0;
    angle += 45;
    $('#foo').css({'transform': 'rotate(' + angle + 'deg)'});
    $('#foo').data('angle', angle);
}

$("document").ready(function () {
    $("#for_date_2").click(function () {
        // $('#rotate').addClass('rotate1');
        $('#rotate').css({animateTo: '+=90'});
});
    // $("#increase_size").click(function () {
    //     $("#cont1 p:last-of-type").css("font-size", "+=1px");
    // });


    // var angle = 0;
    // setInterval(function(){
    //     angle+=3;
    //     jQuery("#rotate").rotate(angle);
    // },50);
    // jQuery("#rotateImg").rotate({animateTo: '+=90'});
    // $('#for_date_2').click(function(){
    //     $(this).rotate(90);
    // });
    jQuery("#rotate3").rotate({
        bind:
        {
            mouseover : function() {
                $(this).rotate({animateTo:180})
            },
            mouseout : function() {
                $(this).rotate({animateTo:0})
            }
        }
    });

$("#box_1").on("click", whenMouseIsClicked).on("mouseleave", whenMouseLeaves);

    function whenMouseIsClicked() {
        $("#box_1").html("<h4>click was detected here</h4>");
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
        $("#box_4").delay(1500).animate({width: "500px", marginLeft: "100px", fontSize: "30px"}, 3000);
        $("#doManySings p").slideUp(1000, "linear");
        $("#doManySings").slideUp(1000, "linear");
    });
    setTimeout(function () {
// Ваш скрипт
    }, 1000);

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


    $("#for_vacation").click(function () {

        answer = confirm('Would you like to know, how many costs a leave, where is the heat?');
        if (answer) {
            var vacTour = {Turkey: 900, Spain: 1400, Egept: 600};
            vacTour.calc = function (peoples, days, country) {
                res = peoples * days * this[country];
                return res;
            };
            var peop = prompt("How many persons will travel?");
            var day = prompt("How many days you want to relax?");
            var countr = prompt("Where would you like to go?", "Turkey, Spain, Egept");
            alert("The cost of the trip will be as follows: " + vacTour.calc(peop, day, countr) + " UA.");
        }


    });

    //=====================parents and their children================================
    $(".ui_message").append('<span class="ui_close">X</span>');
    $(".ui_close").click(function () {
        $(this).parents(".ui_message").fadeOut();
    });
    //=====================FAQ=======================================================
    $(".for_answer").hide();
    $(".forFAQ h4").click(function () {
        $(this).next(".for_answer").slideToggle();
    });
    $(".forFAQ h4").addClass("forFAQ_question");
    //======================for AJAX=================================================
    $("#about").click(function () {
        $(".about_placeholder").load("about.html .body_text");
        return false;
    });


    //====================JSON and AJAX==============================================
    //===============================================================================
    var myPageCounter = 1;
    var animalContainer = document.getElementById("animal_info");
    var btn = document.getElementById("btnJnAx");

    btn.addEventListener("click", function () {
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + myPageCounter + '.json');
        ourRequest.onload = function () {

            if (ourRequest.status >= 200 && ourRequest.status < 400) {
                var ourData = JSON.parse(ourRequest.responseText);
                createHTML(ourData);
            } else {
                console.log("We connected to server, but it returned an error");
            }


        };
        ourRequest.send();

        ourRequest.onerror = function () {
            console.log("Connection error");
        };

        myPageCounter++;
        if (myPageCounter > 3) {
            btn.classList.add("hide_me");
            $(".forJSONandAJAX h2+p").addClass("hide_me");
            $(".forJSONandAJAX > p").css("display", "block");
        }
    });

    function createHTML(myData) {
        var myHtmlString = "";

        for (i=0; i < myData.length; i++) {
            myHtmlString += "<p>" + myData[i].name + " is a " + myData[i].species + "that likes to eat ";

            for (ii = 0; ii < myData[i].foods.likes.length; ii++) {
                if (ii == 0) {
                    myHtmlString += myData[i].foods.likes[ii];
                }else {
                    myHtmlString +=  " and " +  myData[i].foods.likes[ii];
                }
            }

            myHtmlString += " and dislikes ";

            for (ii = 0; ii < myData[i].foods.dislikes.length; ii++) {
                if (ii == 0) {
                    myHtmlString += myData[i].foods.dislikes[ii];
                }else {
                    myHtmlString +=  " and " +  myData[i].foods.dislikes[ii];
                }
            }

            myHtmlString += '.</p>';

        }

        animalContainer.insertAdjacentHTML('beforeend', myHtmlString);
    }

});


//$('#for_java_script').text("У вас все получилось");

//document.getElementById('for_java_script').innerHTML="У вас все получилось";








