
$("document"). ready(function(){
   // $("body"). append("<h1>This is a heading</h1>");

    //$("h1").css("border", "2px solid blue");
    $("h1:first").css("border", "2px solid blue");
    $("#heading_three").css("border", "2px solid red");
    $(".last_one").css("border", "2px solid purple");

   // var newPara = $("p");
    //newPara.append("<i>hello people</i>");
    //$("#box").html(newPara)


    $("#box_1").on("click", whenMouseIsClicked).on("mouseleave", whenMouseLeaves);

    function whenMouseIsClicked() {
        $("#box_1").html("<h4>hey you clicked me</h4>");
    }

    function whenMouseLeaves() {
        $("#box_1").html("<h4 id='bcol'>hey you where are you goin</h4>");
    }


    $("#show").on("click", function () {
        $("#box_2").fadeIn(4000);
    })
    $("#hide").on("click", function () {
        $("#box_2").fadeOut(2000);
    })


        $(".paragr").hover(hightLightPara);
        function hightLightPara() {
            $(this).toggleClass("hightlight")
        }

    $("#toggleThis").click(function(){
        $("#para_1").toggle(4000,"linear")
    })

    $("#slideDown").click(function(){
        $("#para_2").slideUp(4000, "linear") .slideDown(4000, "linear")
    })

    $("#grow").click(function(){
        $("#box_4").animate({width:"500px"},1000);
    })
    $("#move").click(function(){
        $("#box_4").animate({marginLeft:"100px"},1000);
    })
    $("#increaSize").click(function(){
        $("#box_4").animate({fontSize:"30px"},1000);
    })
    $("#doManySings").click(function(e){
        e.preventDefault();
        $("#box_4").animate({width:"500px", marginLeft:"100px", fontSize:"30px"},1000);
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

    $("#append").click(function(){
    $("#cont1 p:first-child").append("hello");
    });
    $("#prepend").click(function(){
        $("#cont1 p:last-child").prepend("hello again from me");
    });

   // $("p").after("##")
    //$("p").before("^^");

    $("#cont1 p:first").wrap("<div id='red'>");

    $("#add_class").click(function(){
        $("#cont1 p:last-child").addClass('color');
    });
     $("#remove_class").click(function(){
      $("#cont1 p:last-child").removeClass('color');
    });
    $("#toggle_class").click(function(){
        $("#cont1 p:last-child").toggleClass('color');
    });
    $("#increase_size").click(function(){
        $("#cont1 p:last-of-type").css("font-size", "+=1px");
    });

        $("#cont1 p:first").next().css("border", "2px solid red");

});

function viewDate(n) {
    var now = new Date();
    var  nowMilli = now.getTime();

    var nowPlusN = new Date(1000*60*60*24*n);
    var milliN = nowPlusN.getTime();

    var summaMilli = nowMilli + milliN;
    var itogMoment = new Date(summaMilli);
    var myDays = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П*ятниця", "Субота"];
    var myMonth = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень","Вересень","Жовтень","Листопад","Грудень"];

    document.write(" " + "День тижня: " + myDays[itogMoment.getDay()] + ".");
    document.write(" " + "Число: " + itogMoment.getDate() + ".");
    document.write(" " + "Місяць: " + myMonth[itogMoment.getMonth()] + ".");
    document.write(" " + "Рік: " + itogMoment.getFullYear() + "." + "<br>");
}
var userDays = prompt ("Введіть число днів віід 1 до 1000");
if (userDays > 1000 || userDays < 1 || isNaN(userDays)) {document.write("Ви ввели неправильне значення!");}
else { var itog = Math.round(userDays); document.write("<br>" + "Через " + itog + " днів буде ось така дата: "); viewDate(itog)}



var days = 365, ourPlanet = " Земля", peoples = "8млрд.", star = " Солнца";
var articl = "Мы живем на планете" + ourPlanet + ", она делает один оборот вокруг" + star +" за " + days + " дней. Население нашей планеты составляет примерно " + peoples + " человек."
document.write(articl);
document.write("<p>Мы живем на планете" + ourPlanet + ", она делает один оборот вокруг" + star +" за " + days + " дней. Население нашей планеты составляет примерно " + peoples + " человек.</p>");


var countris = ["Росія", "Україна", "Казахстан", "Фінляндія", "США"];
var population = [142, 46, 15, 8, 310];
document.write(countris[0] + " населення:" + population[0] + " млн. чол. <br>");
document.write(countris[1] + " населення:" + population[1] + " млн. чол. <br>");
document.write(countris[2] + " населення:" + population[2] + " млн. чол. <br>");
document.write(countris[3] + " населення:" + population[3] + " млн. чол. <br>");
document.write(countris[4] + " населення:" + population[4] + " млн. чол. <br>");


var fruits = ["апельсин", "банан", "груша"];
var count = fruits.length;
document.write("количество фруктов: " + count + "шт.");

fruits.push("яблоко", "ананас.");
fruits.unshift("грейпфрут");
document.write("<br>" + fruits);

var count = fruits.length;
document.write("<br>" + "количество фруктов: " + count + "шт.");

fruits.pop();
fruits.shift();
var count = fruits.length;
document.write("<br>" + "количество фруктов: " + count + "шт.");


var fruits = ["яблуко", "апельсин", "груша", "гранат."];
var count = fruits.length;
fruits.splice(fruits.length - 2, 1, "ананас");
document.write("<br>" + fruits);

var fruits = ["банан", "мандарин", "манго."];
var count = fruits.length;
fruits.splice(fruits.length - 2, 1, "ананас");
document.write("<br>" + fruits);

var fruits = ["яблуко", "апельсин", "груша", "гранат", "банан", "мандарин", "манго."];
document.write("<br>" + fruits.reverse());

var fruits = ["яблуко", "апельсин", "груша", "гранат", "банан", "мандарин", "манго."];
document.write("<br>" + fruits.sort());

var fruits = ["яблуко", "апельсин", "груша", "гранат", "банан", "мандарин", "манго."];
document.write("<br>" + fruits.join("/"));

var fruits = ["яблуко", "апельсин", "груша", "гранат", "банан", "мандарин", "манго."];
var fruits2 = ["слива", "агрус", "малина"];
var total = fruits.concat(fruits2);
document.write("<br>" + total);

var fruits = ["яблуко", "апельсин", "груша", "гранат", "банан", "мандарин", "манго."];
var mainFruits = fruits.slice(1,3);
document.write("<br>" + "На десерт ввечері подати ці фрукти: " + mainFruits);

var fruits1 = ["яблуко", "апельсин", "груша", "гранат", "банан", "мандарин", "манго."];
var fruits2 = ["слива", "агрус", "малина"];
var fruits3 = ["виноград", "черешня", "персик"];
var fruitStorige = [fruits1, fruits2, fruits3];
document.write("<br>" + fruitStorige [1] [1]);


var fruits = ["яблуко", "апельсин", "груша", "гранат", "банан", "мандарин", "манго."];
var count = fruits.length;
if (count >= 5) {document.write("<br>" + "Це великий масив, не менше 5 елементів.");}
else {document.write("<br>" + "Це маленький масив, у ньому менше 5 елементів.");}

var pogoda = "ясно";
var car = "да";
if (pogoda =="ясно" && car =="да") {document.write("<br>" + "їдемо на пляж!");}
else {document.write("<br>" + "ідем грати в боулінг.");}

var fruits = ["яблуко", "апельсин", "груша", "гранат", "банан", "мандарин", "манго."];
var count = fruits.length;
if (count == 7 && fruits.length - 1) {document.write("<br>" + "мені це ок");}
else {document.write("<br>" + "нехочу цього");}


i=1;
while (i <= 5) {document.write("<br>" + i + "<br>");
i++;}

var fruits = ["яблуко", "апельсин", "груша", "гранат", "банан", "мандарин", "манго."];
var i=[0];
while (i < fruits.length) {document.write("<br>" + fruits[i] + "<br>");
i++;}
for (var i=0; i<fruits.length; i++) {document.write("<br>" + fruits[i] + "<br>");}

var students2 = ['Абаканов Сергей', 'Алалина Алина', 'Гагарин Матвей', 'Хантухова Лейла', 'Викторов Сергей',  'Масалкин Андрей', 'Петравкин Алексей', 'Московин Павел', 'Данилов Станислав'];
var i=[2];
while (i <= 6) {document.write("<br>" + students2[i] + "<br>");
i++;}

for (var i=1; i<8; i++) {document.write("квадрат " + i + "=" + i*i + "<br>");}


/*window.open("дир-дир-дир", "нове вікно", "width=400, heigh=300");
newWin.documen.write("Виводимо щось у нове вікно");*/

//alert("це модальне вікно");

//var age = prompt("скільки ти зловив риби?", "я зловив:");
//alert("ти точно зловив" + age);

/*var ansver = confirm("ти поїдеш зі мною на рибалку?");
if (ansver) {document.write("перемога! їдемо разом!");}
else {document.write("ну то я поїду сам!");}*/

/*var age = prompt("скільки тобі років?", "Мені повних років:");
if (age >= 20) {document.write("ти вже доросла людина!");}
else {document.write("ти ще молодий, у тебе все попереду.");}*/

/*var age = prompt("скільки тобі років?", "Мені повних років:");
var year = prompt("який зараз рік?");
while (age >= 0) { if (age ==0) {document.write(" У цьому " + year + " ти народився.");}
else {document.write("В" + year + " тобі було " + age + "років." + "<br>");} age--; year--;}*/

function summa (number1, number2) {
    var itog = number1 + number2;
    document.write("Разом (сума): " + itog + "<br>");}
var car = 189;
var moto =823;
summa(car,moto);

/*function fio () {
    var name = prompt("напишіть своє імя");
    var fam = prompt("прізвище");
    var otch = prompt("по батькові");
    var result = name + " " + fam + " " + otch;
    return result; 
}
alert (fio());*/

var now = new Date();
var hour = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
if (minutes < 10 ) {minutes = "0" + minutes};
if (seconds < 10) {seconds = "0" + seconds};
document.write("зараз час: " +  hour + ":" + minutes + ":" + seconds);

var myDays = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П*ятниця", "Субота"];
var now = new Date;
document.write(" " + myDays[now.getDay()]);

var now = new Date();
var from1970 = (now.getTime()/(1000*60*60*24));
var ny = new Date (2017, 0, 1, 0, 0, 0);
var from1970ToNy = (ny.getTime()/(1000*60*60*24));
document.write(" " + "До нового року залишилось" + (Math.round(from1970ToNy) - Math.round(from1970)) + "днів.");
var myDays = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П*ятниця", "Субота"];
document.write(" " + "Це буде день тижня: " + myDays[ny.getDay()]);



/*var option;
for (option in navigator) {
    document.write(option + ' : ' + navigator[option] + "<br>");
}*/

function userDetails () {
    document.write("<br>" + "Назва браузера: " + navigator.userAgent + "<br>");
    document.write("Мова: " + navigator.language + "<br>");
    document.write("Назва ОС: " + navigator.appVersion + "<br>");
    document.write("Чи включені куки: " + navigator.cookieEnabled + "<br>");
    document.write("Підключення до інтернету: " + navigator.onLine + "<br>");
    document.write ("Розмір екрану: " + screen.width + "x" + screen.height + "<br>");
    document.write ("Насиченість кольору: " + screen.colorDepth + "<br>");
}
userDetails ();

var option;
for (option in location) {
    document.write(option + ' : ' + location[option] + "<br>");
}
