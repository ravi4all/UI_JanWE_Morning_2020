// Event Binding

window.addEventListener("load", function(){
    document.getElementById("btn").addEventListener("click", greet);
});

function greet() {
    console.log("Greet Called...");
    var username = document.getElementById("name");
    document.getElementById("result").innerHTML = username.value;
}