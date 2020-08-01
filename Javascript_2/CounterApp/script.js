window.addEventListener("load", initEvent);
var counter = 10;
var display_counter;
function initEvent() {
    btn_1 = document.getElementById('btn_1');
    btn_2 = document.getElementById('btn_2');
    btn_1.addEventListener("click", incCounter);
    btn_2.addEventListener("click", decCounter);
    display_counter = document.getElementById('count');
}

function incCounter() {
    counter++;
    // console.log(counter);
    display_counter.innerHTML = counter;
}

function decCounter() {
    // console.log(counter);

    if (counter == 10) {
        counter = 10;
    }
    else {
        counter--;
    }

    display_counter.innerHTML = counter;
}