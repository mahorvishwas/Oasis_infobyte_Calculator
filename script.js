let buttons = document.querySelectorAll(".button");
let input = document.querySelector("#display");
let str = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', function(e) {
        if (e.target.innerHTML == "=") {
            str = eval(str);
            input.value = str;
        } else if (e.target.innerHTML == "AC") {
            str = "";
            input.value = str;
        } else if (e.target.innerHTML == "DEL") {
            str = str.slice(0, str.length - 1);
            input.value = str;
        } else {
            str = str + e.target.innerHTML;
            input.value = str;
        }
    })
});