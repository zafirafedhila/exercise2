var btnSamaDengan = document.getElementById("samaDengan");
var result = document.getElementsByClassName("result")[0];
var temporary = document.getElementsByClassName("temporary")[0];
var wrapperCalculator = document.getElementsByClassName("wrapper-calculator")[0];
var tombol = document.getElementsByClassName("num");
var operator = document.getElementsByClassName("oper");


for (var i = 0; i < tombol.length; i++) {
    tombol[i].addEventListener("click", function () {
        result.innerHTML += this.innerHTML;
        if (this.innerHTML == "AC") {
            result.innerHTML = "";
        }
    })
}

for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function () {

        if (this.innerHTML == "=") {
            var x = result.innerHTML;
            x = eval(x);
            result.innerHTML = x;
            console.log(x);
        } else {
            result.innerHTML += this.innerHTML;
        }
    })
}

window.addEventListener("keyup", function (event) {
    if (event.code == "Backspace") {
        var x = result.innerHTML;
        var i = x.length - 1;
        var newResult = x.substring(0, i);
        result.innerHTML = newResult;
    }
})