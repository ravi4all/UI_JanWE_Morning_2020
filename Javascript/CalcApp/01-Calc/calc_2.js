window.addEventListener("load", initEvents);
var f_num;
var s_num;
var res;
function initEvents() {
    f_num = document.getElementById("box_1");
    s_num = document.getElementById("box_2");
    res = document.getElementById("box_3");
    res.setAttribute('readonly','on');
    var btns = document.getElementsByClassName("btn");
    for(var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", calc);
    }
}

function calc() {
    var opr = event.srcElement.innerHTML;
    var expression = f_num.value + opr + s_num.value;
    // console.log(expression);
    var result = eval(expression);
    res.value = result;
}
