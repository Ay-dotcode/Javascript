const display = document.getElementById("display");

function appendToDisplay(input) {
    if (display.value === "Error")
        clearDisplay();
    display.value += input;
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
function deleteLastDigit() {
    display.value = display.value.slice(0, -1);
}