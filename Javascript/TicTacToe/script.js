window.addEventListener("load",init)
var choiceBox;
var user_char;
var cpu_char;
var btns;
var count = 0;
var win_combinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function init() {
    choiceBox = document.querySelector("#box");
    choiceBox.addEventListener("blur",pickChar);
    btns = document.querySelectorAll(".btn");
    for(var i = 0; i < btns.length; i++) {
        btns[i].setAttribute('title',i);
        btns[i].addEventListener("click",setPosition);
    }
}

function pickChar() {
    user_char = choiceBox.value;
    if(user_char == "x") {
        cpu_char = "0";
    }
    else {
        cpu_char = "x";
    }
    // console.log("User",user_char);
    // console.log("CPU",cpu_char);
}

function setPosition() {
    event.srcElement.innerText = user_char;
    var  user_pos = event.srcElement.title;
    event.srcElement.disabled = 'on';
    count += 1;
    win = checkWinner(user_pos,user_char);
    if (win) {
        console.log("You win");
        // alert("User Win...");
    }
    else {
        setTimeout(function() {
            cpuPosition();
        },1000);
    }
}

function cpuPosition() {
    if(count <= 8) {
        cpu_pos = parseInt(Math.random() * 9);
        if(btns[cpu_pos].innerText == "x" || btns[cpu_pos].innerText == "0") {
            console.log("Already occupied",cpu_pos);
            cpuPosition();
        }
        else {
            console.log("CPU Picked",cpu_pos);
            btns[cpu_pos].innerText = cpu_char;
            btns[cpu_pos].disabled = 'on';
            count += 1;
            checkWinner(cpu_pos,cpu_char);
            return
        }
    }
}

function checkWinner(pos,ch) {
    for (var i = 0; i < win_combinations.length; i++) {
        for(var j = 0; j < win_combinations[i].length; j++) {
            // console.log(pos, win_combinations[i][j]);
            if (pos == win_combinations[i][j]) {
                win_combinations[i][j] = ch;
            }
        }
    }
    // console.log(win_combinations);
    for(var i = 0; i < win_combinations.length; i++) {
        console.log(win_combinations[i]);
        if(win_combinations[i][0] == ch && win_combinations[i][1] == ch && win_combinations[i][2] == ch) {
            console.log("You win the game...");
            return true;
        }
    }
}