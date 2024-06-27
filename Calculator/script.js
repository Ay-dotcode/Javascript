const display = document.getElementById("display");

function appendToDisplay(input) {
    if (display.value === "Error")
        clearDisplay();
    display.value += input;
    moveCursorToTheEnd();
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
function moveCursorToTheEnd() {
    display.scrollLeft = display.scrollWidth
}