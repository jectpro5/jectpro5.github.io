


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
