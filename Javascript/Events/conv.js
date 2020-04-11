window.addEventListener("load", initEvents);

var box_1;
var box_2;
var dropdown_1;
var dropdown_2;
function initEvents() {
    box_1 = document.querySelector("#box_1");
    box_2 = document.querySelector("#box_2");

    dropdown_1 = document.querySelector("#form_1");
    dropdown_2 = document.querySelector("#form_2");

    dropdown_1.addEventListener("change",select_b1);
    dropdown_2.addEventListener("change",select_b2);

    // box_1.addEventListener("keyup", calculate_1);
    // box_2.addEventListener("keyup", calculate_2);
}

function select_b1() {
    var t1 = dropdown_1.value;
}

function select_b2() {
    var t2 = dropdown_2.value;
}

function km_to_m() {
    var num = box_1.value;
    var result = num * 1000;
    box_2.value = result;
}

function m_to_km() {
    var num = box_2.value;
    var result = num / 1000;
    box_1.value = result;
}

function cm_to_m(){

}

function m_to_cm() {

}