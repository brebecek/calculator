let currentInput = '';
let currentOperation = '';
let previousInput = '';

function operate (){
    if (previousInput === '' || currentInput === '') return;
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0){
                alert("Indivisible");
                return;
            }
            result = prev / current;
            break;
        default:
            return;

    }
    currentInput = result.toString();
    currentOperation = '';
    previousInput = '';
    document.getElementById('display').value = currentInput;
}

function appendToDisplay(input){
    currentInput += input;
    document.getElementById('display').value = `${previousInput} ${currentOperation} ${currentInput}`;
    }

function appendOperationToDisplay(operation) {
    if(currentInput === '') return;
    if(currentInput !== '') {
        operate();
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    document.getElementById('display').value = `${previousInput} ${currentOperation}`;
}

function clearDisplay(){
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    document.getElementById('display').value = '';
}
