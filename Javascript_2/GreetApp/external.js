// Event Binding
// window.addEventListener("load", function() {
//     document.getElementById("btn").addEventListener('click', greet);
// });

window.addEventListener("load", initEvent);

function initEvent() {
    document.getElementById("btn").addEventListener('click', greet);
}

function greet() {
    console.log("Greet Called...");
    username = document.getElementById('box_1');
    username = username.value;
    document.getElementById('output').innerHTML = username;
}