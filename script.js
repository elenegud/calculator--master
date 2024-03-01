
const display = document.getElementById("asdasd");
let rawVelue = "";

function appendValue(value) {
    if ((value === '*' || value === '/' || value === '+' || value === '-') & rawVelue === '') {
        return
    }
    if (value === '.' & rawVelue === '') {
        rawVelue = '0.';
        display.value = '0.';
        return
    }
    if (rawVelue === "") {
        display.value = value;
    } else {
        display.value += value;
    }
    rawVelue += value;

}

function clearDisplay() {
    display.value = "";
    rawVelue = "";
}

function calculate() {

    try {
        if (rawVelue === '') {
            return
        }
        display.value = eval(rawVelue);
        rawVelue = "";
    } catch (error) {
        alert(error.message)
        console.log(error)
    }
}

function clearOneValue() {
    display.value = display.value.toString().slice(0, -1);
    rawVelue = rawVelue.toString().slice(0, -1);
}