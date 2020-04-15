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
    if (calculation.length > 0) {
        try {
            calculation = calculation.replace(/\*\(/g, "(").replace(/\(/g, "*(").replace(/\+\*/g, "+").replace(/\-\*/g, "-").replace(/\/\*/g, "/");
            document.getElementsByClassName("calc__output")[0].innerHTML = eval(calculation);
        } catch {
            document.getElementsByClassName("calc__output")[0].innerHTML = "Syntax Error";
        }
    }
}

function updateAccent(checkbox) {
    if (checkbox.value == "red") {
        document.documentElement.style.setProperty('--accent', '255, 54, 110');
    } else if (checkbox.value == "blue") {
        document.documentElement.style.setProperty('--accent', '82, 204, 255');
    }
}

function updateTheme(checkbox) {
    if (checkbox.value == "light") {
        document.documentElement.style.setProperty('--theme', '255, 255, 255');
        document.documentElement.style.setProperty('--text', '0, 0, 0');
        document.documentElement.style.setProperty('--hover', '0, 0, 0, 0.025');
        document.documentElement.style.setProperty('--shadow', '225, 225, 225');
    } else if (checkbox.value == "dark") {
        document.documentElement.style.setProperty('--theme', '40, 40, 40');
        document.documentElement.style.setProperty('--text', '240, 240, 240');
        document.documentElement.style.setProperty('--hover', '255, 255, 255, 0.05');
        document.documentElement.style.setProperty('--shadow', '0, 0, 0');
    }
}