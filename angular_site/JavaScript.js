document.title = "Angular + JavaScript"

document.getElementById("pure_JS_title").innerHTML = "Testing once again"
var forJS_title = document.getElementById("pure_JS_title")
forJS_title.innerHTML = "This is a test"
forJS_title.innerHTML = "This piece is made in pure JavaScript"


var newItemCounter = 1;
var ourList = document.getElementById("our_list");
var ourButton = document.getElementById("for_pure");
var ourHeadLine = document.getElementById("pure_JS_h2");
var listItems = document.getElementById("our_list").getElementsByTagName("li");
for (i=0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", activateItem);
}
function activateItem() {
    ourHeadLine.innerHTML = this.innerHTML;
}
ourButton.addEventListener("click", createNewItem);
function createNewItem() {
    ourList.innerHTML += "<li>Something new " + newItemCounter + "</li>";
    newItemCounter++;
}

var newItemCounter_2 = 1;
var ourList_2 = document.getElementById("our_list_2");
var ourButton_2 = document.getElementById("for_pure_2");
var ourHeadLine_2 = document.getElementById("pure_h2_2");
var listItems_2 = document.getElementById("our_list_2").getElementsByTagName("li");
ourList_2.addEventListener("click", activateItem_2);
function activateItem_2(e) {
   if (e.target.nodeName == "li") {
       ourHeadLine_2.innerHTML = e.target.innerHTML;
       for (i=0; i < e.target.parentNode.children.length; i++) {
           e.target.parentNode.children[i].classList.remove("active");
       }
       e.target.classList.add("active");
   }
}
ourButton_2.addEventListener("click", createNewItem_2);
function createNewItem_2() {
    ourList_2.innerHTML += "<li>Something new " + newItemCounter_2 + "</li>";
    newItemCounter_2++;
}

var newItemCounter_3 = 1;
var ourList_3 = document.querySelector("#our_list_3");
var ourButton_3 = document.getElementById("for_pure_3");
var ourHeadLine_3 = document.getElementById("pure_h2_3");
var listItems_3 = document.querySelectorAll("#our_list_3 li");
ourList_3.addEventListener("click", activateItem_3);
function activateItem_3(e) {
    if (e.target.nodeName == "li") {
        ourHeadLine_3.innerHTML = e.target.innerHTML;
        for (i=0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove("active");
        }
        e.target.classList.add("active");
    }
}
ourButton_3.addEventListener("click", createNewItem_3);
function createNewItem_3() {
    ourList_3.innerHTML += "<li>Something new " + newItemCounter_3 + "</li>";
    newItemCounter_3++;
}


var btn_json = document.getElementById("btn_json");
btn_json.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData[0]);
    };
    ourRequest.send();
});
