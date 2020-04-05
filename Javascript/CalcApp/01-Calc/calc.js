window.addEventListener("load", initEvents);
var f_num;
var s_num;
var res;
function initEvents() {
    f_num = document.getElementById("box_1");
    s_num = document.getElementById("box_2");
    res = document.getElementById("box_3");
    res.setAttribute('readonly','on');
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("sub").addEventListener("click", sub);
    document.getElementById("div").addEventListener("click", div);
    document.getElementById("mul").addEventListener("click", mul);
}

function add() {
    var result = parseInt(f_num.value) + parseInt(s_num.value);
    res.value = result;
}

function sub() {
    var result = parseInt(f_num.value) - parseInt(s_num.value);
    res.value = result;
}

function div() {
    var result = parseInt(f_num.value) / parseInt(s_num.value);
    res.value = result;
}

function mul() {
    var result = parseInt(f_num.value) * parseInt(s_num.value);
    res.value = result;
}