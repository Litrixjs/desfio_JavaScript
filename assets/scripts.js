document.querySelector("#subtrair").addEventListener("click", decrement);
document.querySelector("#adicionar").addEventListener("click", increment);
var currentNumber = 0;
let count = 0;

function increment() {
    if (count < 10) {
        count++;
        document.querySelector("#currentNumber").textContent = count;
        var square = document.getElementById("currentNumber");
        square.style.backgroundColor = "rgb(241, 214, 214)";
    }
    else {
        document.querySelector("currentNumber").removeEventListener;
        var square = document.getElementById("currentNumber");
        square.style.backgroundColor = "rgb(241, 214, 214)";
    }
}

function decrement() {
    if (count > 0) {
        count--;
        document.querySelector("#currentNumber").textContent = count;
        var square = document.getElementById("currentNumber");
        square.style.backgroundColor = "rgb(241, 214, 214)";
    }
    else {
        var square = document.getElementById("currentNumber");
        square.style.backgroundColor = "red";
    }
}