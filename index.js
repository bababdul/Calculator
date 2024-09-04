// Calculator

let display = document.getElementById("display");

let x = 0;
function appendToDisplay(input){
    if (display.value == 0){
        display.value = null;
    }
    display.value += input;
    x++;
}

function clearDisplay(){
    display.value = '0';
    x = 0;
}
function calculate(){

    let currentValue = display.value;

    // Use a regular expression to find and replace occurrences of a number followed by an opening parenthesis
    let updatedValue = currentValue.replace(/(\d+)\(/g, "$1*(");
    updatedValue = updatedValue.replace(/\)(\d+)/g, ")*$1");

    display.value = updatedValue;
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
        setTimeout(function(){
            clearDisplay();
        }, 1000)//
    }
    
}
function evaluateExpression() {
    let currentValue = display.value;
    const result = math.evaluate(display.value);
    display.value = result
    document.getElementById('result').innerText = `Result: ${result}`;
}