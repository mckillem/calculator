var operator = "";
var number1 = "";
var number2 = "";
var result = 0;

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
    displayTextContent: function displayTextContent(number) {
        var display = document.getElementById("display");
        if(display.textContent !== "0") {
            display.textContent += number;
            return display.textContent;
        } else {
            return display.textContent = number;
        }
    },
    one: function() {
        this.displayTextContent("1");
    },
    two: function() {
        this.displayTextContent("2");        
    },
    three: function() {
        this.displayTextContent("3"); 
    },
    four: function() {
        this.displayTextContent("4"); 
    },
    five: function() {
        this.displayTextContent("5"); 
    },
    six: function() {
        this.displayTextContent("6"); 
    },
    seven: function() {
        this.displayTextContent("7"); 
    },
    eight: function() {
        this.displayTextContent("8"); 
    },
    nine: function() {
        this.displayTextContent("9"); 
    },
    zero: function() {
        this.displayTextContent("0"); 
    }
}

var handlers = {
    count: function count(operation) {
        var display = document.getElementById("display");
        var calculation;

        if(operator === "") {
            switch (operation) {
                case "add":
                    calculation = calculations.add;
                    operator = operation;
                    break;
                case "sub":
                    calculation = calculations.sub;
                    operator = operation;
                    break;
                case "multiply":
                    calculation = calculations.multiply;
                    operator = operation;                    
                    break;
                case "divide":
                    calculation = calculations.divide;
                    operator = operation;                    
                    break;
            }
        } else {
            if(operator === operation) {
                switch (operation) {
                    case "add":
                        calculation = calculations.add;
                        break;
                    case "sub":
                        calculation = calculations.sub;
                        break;
                    case "multiply":
                        calculation = calculations.multiply;
                        break;
                    case "divide":
                        calculation = calculations.divide;
                        break;
                }
            } else {
                switch (operator) {
                    case "add":
                        calculation = calculations.add;
                        break;
                    case "sub":
                        calculation = calculations.sub;
                        break;
                    case "multiply":
                        calculation = calculations.multiply;
                        break;
                    case "divide":
                        calculation = calculations.divide;
                        break;
                }
                operator = operation;
            }
            
        }
        

        if(number1 === "") {
            number1 = display.textContent;
        } else {
            number2 = display.textContent;
            number1 = calculation(Number.parseFloat(number1), Number.parseFloat(number2));
        }
        
        
        console.log(number1);
        return display.textContent = "0";
    },
    addButton: function addButton() {
        // var display = document.getElementById("display");
        // var displayAll = document.getElementById("displayAll");
        // if(number1 === "") {
        //     number1 = display.textContent;
        // } else {
        //     number2 = display.textContent;
        //     number1 = calculations.add(Number.parseFloat(number1), Number.parseFloat(number2));
        // }
        
        
        // console.log(number1);
        // operator = "+";
        // displayAll.textContent += display.textContent + operator;
        // return display.textContent = "0";
        this.count("add");
        
    },
    subButton: function subButton() {
        this.count("sub");
    },
    multiplyButton: function multiplyButton() {
        this.count("multiply");
    },
    divideButton: function divideButton() {
        this.count("divide");
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
        var display = document.getElementById("display");
        number2 = display.textContent;
        if(operator === "add") {
            result = calculations.add(Number.parseFloat(number1), Number.parseFloat(number2));
            return display.textContent = result; 
        }
        if(operator === "sub") {
            result = calculations.sub(Number.parseFloat(number1), Number.parseFloat(number2));
            return display.textContent = result; 
        }
        if(operator === "multiply") {
            result = calculations.multiply(Number.parseFloat(number1), Number.parseFloat(number2));
            return display.textContent = result; 
        }
        if(operator === "divide") {
            result = calculations.divide(Number.parseFloat(number1), Number.parseFloat(number2));
            return display.textContent = result; 
        }      
    }
}