let calculation = "";

function insert(char) {
    calculation += char;
    update();
}

function update() {
    document.getElementsByClassName("calc__input")[0].innerHTML = calculation.replace(/\*/g, "×").replace(/\//g, "÷");
}

function clearCalc() {
    calculation = "";
    update();
}

function del() {
    calculation = calculation.slice(0, -1);
    update();
}

function calculate() {
    try {
        calculation = calculation.replace(/\*\(/g, "(").replace(/\(/g, "*(").replace(/\+\*/g, "+").replace(/\-\*/g, "-").replace(/\/\*/g, "/");
        document.getElementsByClassName("calc__output")[0].innerHTML = eval(calculation);
    } catch {
        document.getElementsByClassName("calc__output")[0].innerHTML = "Syntax Error";
    }
}

function updateTheme(checkbox) {
    if (checkbox.value == "red") {
        document.documentElement.style.setProperty('--theme', '255, 54, 110');
    } else if (checkbox.value == "blue") {
        document.documentElement.style.setProperty('--theme', '82, 204, 255');
    }
}