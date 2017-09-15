var operator = "";
var number1 = "";
var number2 = "";

var calculations = {
    add: function add(a, b) {
        return a + b;
    },
    sub: function sub(a, b) {
        return a - b;
    },
    multiply: function multiply(a, b) {
        return a * b;
    },
    divide: function divide(a, b) {
        if(a !== 0) {
            return a / b;    
        }
        return "You cannot divide by zero (for whatever reason)."
    }
}

var numbers = {
    one: function() {
        var display = document.getElementById("display");
        if(display.textContent !== "0") {
            display.textContent += "1";
            return display.textContent;
        } else {
            return display.textContent = "1";
        }
    },
    two: function() {
        var display = document.getElementById("display");
        if(display.textContent !== "0") {
            display.textContent += "2";
            return display.textContent;
        } else {
            return display.textContent = "2";
        }
    },
    three: function() {
        var display = document.getElementById("display");
        if(display.textContent !== "0") {
            display.textContent += "3";
            return display.textContent;
        } else {
            return display.textContent = "3";
        }
    },
    four: function() {
        var display = document.getElementById("display");
        if(display.textContent !== "0") {
            display.textContent += "4";
            return display.textContent;
        } else {
            return display.textContent = "4";
        }
    },
    five: function() {
        var display = document.getElementById("display");
        if(display.textContent !== "0") {
            display.textContent += "5";
            return display.textContent;
        } else {
            return display.textContent = "5";
        }
    },
    six: function() {
        var display = document.getElementById("display");
        if(display.textContent !== "0") {
            display.textContent += "6";
            return display.textContent;
        } else {
            return display.textContent = "6";
        }
    },
    seven: function() {
        var display = document.getElementById("display");
        if(display.textContent !== "0") {
            display.textContent += "7";
            return display.textContent;
        } else {
            return display.textContent = "7";
        }
    },
    eight: function() {
        var display = document.getElementById("display");
        if(display.textContent !== "0") {
            display.textContent += "8";
            return display.textContent;
        } else {
            return display.textContent = "8";
        }
    },
    nine: function() {
        var display = document.getElementById("display");
        if(display.textContent !== "0") {
            display.textContent += "9";
            return display.textContent;
        } else {
            return display.textContent = "9";
        }
    },
    zero: function() {
        var display = document.getElementById("display");
        if(display.textContent !== "0") {
            display.textContent += "0";
            return display.textContent;
        } else {
            return display.textContent = "0";
        }
    }
}

var handlers = {
    addButton: function addButton() {
        var display = document.getElementById("display");
        number1 = display.textContent;
        operator = "+";
        return display.textContent = "0";
    },
    subButton: function subButton() {
        var display = document.getElementById("display");
        number1 = display.textContent;
        operator = "-";
        return display.textContent = "0";
    },
    multiplyButton: function multiplyButton() {
        var display = document.getElementById("display");
        number1 = display.textContent;
        operator = "*";
        return display.textContent = "0";
    },
    divideButton: function divideButton() {
        var display = document.getElementById("display");
        number1 = display.textContent;
        operator = "/";
        return display.textContent = "0";
    },
    clearButton: function clearButton() {
        var display = document.getElementById("display");
        return display.textContent = "0";
    },
    allClearButton: function allClearButton() {
        var display = document.getElementById("display");
        number1 = "";
        number2 = "";
        return display.textContent = "0";
    },
    decimalButton: function decimalButton() {
        var display = document.getElementById("display");
        if(display.textContent.search(/\./) === -1) {
            if(display.textContent !== "0") {
                display.textContent += ".";
                return display.textContent;
            } else {
                return display.textContent = "0.";
            }
        }
    },
    equalsButton: function equalsButton() {
        var result = 0;
        var display = document.getElementById("display");
        number2 = display.textContent;
        if(operator === "+") {
            result = calculations.add(Number.parseFloat(number1), Number.parseFloat(number2));
            return display.textContent = result; 
        }
        if(operator === "-") {
            result = calculations.sub(Number.parseFloat(number1), Number.parseFloat(number2));
            return display.textContent = result; 
        }
        if(operator === "*") {
            result = calculations.multiply(Number.parseFloat(number1), Number.parseFloat(number2));
            return display.textContent = result; 
        }
        if(operator === "/") {
            result = calculations.divide(Number.parseFloat(number1), Number.parseFloat(number2));
            return display.textContent = result; 
        }      
    }
}