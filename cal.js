
const display = document.getElementById('display');


function appendValue(input) {
   
    if (display.value === "0" || display.value === "Error") {
        display.value = input;
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
}


function deleteLast() {
    display.value = display.value.slice(0, -1);
}


function calculate() {
    if (!display.value) return;

    try {
        
        let result = eval(display.value);
        
        
        if (result % 1 !== 0) {
            result = parseFloat(result.toFixed(4));
        }

        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}