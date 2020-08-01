window.addEventListener("load", initEvent);
var f_num;
var s_num;
function initEvent() {
    f_num = document.getElementById("box_1");
    s_num = document.getElementById("box_2");
    var btns = document.getElementsByClassName("btn");
    for(var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", calc);
    }
    document.getElementById("btn-1").addEventListener("click", reset);
}

function calc() {
    var element = event.srcElement;
    // console.log(element);
    var opr = element.innerHTML;
    // console.log(opr);
    var expression = f_num.value + opr + s_num.value;
    // console.log(expression);
    var result = eval(expression);
    document.getElementById("box_3").value = result;
}

function reset() { 
    f_num.value = "";
    s_num.value = "";
 }