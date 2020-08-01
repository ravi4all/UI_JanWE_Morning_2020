window.addEventListener("load", initEvent);
var num_btns;
var opt_btns;
var result_box;
var temp_Value;
function initEvent() {
    result_box = document.querySelector("#result");
    // num_btns = document.querySelector("#box_1");
    // num_btns = document.querySelector(".box_1");
    num_btns = document.querySelectorAll(".num");
    for(var i = 0; i < num_btns.length; i++) {
        num_btns[i].addEventListener("click", appendNum);
    }
    opr_btns = document.querySelectorAll(".opr");
    for(var i = 0; i < opr_btns.length; i++) {
        opr_btns[i].addEventListener("click", appendOpr);
    }
}

function appendNum() {
    var num = event.srcElement.innerHTML;
    result_box.value += num;
    temp_Value = result_box.value;
}

function appendOpr() {
    var opr = event.srcElement.innerHTML;
    result_box.value = temp_Value + opr;
}