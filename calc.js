const numA = 0;
const numB = 0;
const oper = "";

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function operate (a, oper, b){
    if (oper === "+"){
    return add(a,b);
    } else if (oper === "-"){
        return subtract(a,b);
    } else if (oper === "*"){
        return multiply(a,b);
    } else if (oper === "/"){
        return divide(a,b);
    }
}