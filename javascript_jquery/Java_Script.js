


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


//setTimeout("alert('test');", 3000);
var newItemCount =1;
var ourList = document.getElementById("our_list")
var ourButton = document.getElementById("for_pure_btn");
var ourHeadLine = document.getElementById("pure_JS_h2");
var listItems = document.getElementById("our_list").getElementsByTagName("li");
ourList.addEventListener("click", activateItem);
function activateItem(e) {
    if (e.target.nodeName == "LI") {
        ourHeadLine.innerHTML = e.target.innerHTML;
        for (i=0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove("pure_active");
        }
        e.target.classList.add("pure_active");
    }
}
ourButton.addEventListener("click", createNewItem);
function createNewItem() {
    ourList.innerHTML += "<li>Something new" + newItemCount + "</li>";
    newItemCount++;
}

function persn(name, fawColor) {console.log("Hello, my name is " + name + "and my favorite color is " + fawColor + ".");
}
persn("Ruslan", "green");
persn("Sergey", "orange");
