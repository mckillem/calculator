var operator = "";

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(a !== 0) {
        return a / b;    
    }
    return "You cannot divide by zero (for whatever reason)."
}

// $("#add").click(function(e) {
//     e.preventDefault();
//     var a = Number.parseInt($("#a").val());
//     var b = Number.parseInt($("#b").val());
//     console.log(add(a, b));
// });

// $("#sub").click(function(e) {
//     e.preventDefault();
//     var a = Number.parseInt($("#a").val());
//     var b = Number.parseInt($("#b").val());
//     console.log(sub(a, b));
// });

// $("#multiply").click(function(e) {
//     e.preventDefault();
//     var a = Number.parseInt($("#a").val());
//     var b = Number.parseInt($("#b").val());
//     console.log(multiply(a, b));
// });

// $("#divide").click(function(e) {
//     e.preventDefault();
//     var a = Number.parseInt($("#a").val());
//     var b = Number.parseInt($("#b").val());
//     console.log(divide(a, b));
// });

// $("#clear").click(function(e) {
//     e.preventDefault();
//     $("#a").val(0);
//     $("#b").val(0);
// });

// s jedním inputem
$("#add").click(function(e) {
    e.preventDefault();
    $("#display").text(function(i, val) {
        if(val.match(/[*/+-]/)) {
            array = val.split(val.match(/[*/+-]/));
            var number1 = array[0];
            var number2 = array[1];

            if(operator === "+") {
                var result = add(Number.parseInt(number1), Number.parseInt(number2));
                val = result + "+";
                return val;
            }

        } else {
            val += "+";
            operator = "+";
            return val;
        }
        
    });
});

$("#sub").click(function(e) {
    e.preventDefault();
    $("#display").text(function(i, val) {
        if(val.match(/[*/+-]/)) {
            array = val.split(val.match(/[*/+-]/));
            var number1 = array[0];
            var number2 = array[1];

            if(operator === "-") {
                var result = sub(Number.parseInt(number1), Number.parseInt(number2));
                val = result + "-";
                return val;
            }

        } else {
            val += "-";
            operator = "-";
            return val;
        }
    });
});

$("#multiply").click(function(e) {
    e.preventDefault();
    $("#display").text(function(i, val) {
        val += "*";
        return val;
    });
});

$("#divide").click(function(e) {
    e.preventDefault();
    $("#display").text(function(i, val) {
        val += "/";
        return val;
    });
});

$("#1").click(function(e) {
    e.preventDefault();
    $("#display").text(function(i, val) {
        if(val !== "0") {
            val += "1";
            return val;
        } else {
            return "1";
        }
    });
});

$("#2").click(function(e) {
    e.preventDefault();
    $("#display").text(function(i, val) {
        if(val !== "0") {
            val += "2";
            return val;
        } else {
            return "2";
        }
    });
});

$("#3").click(function(e) {
    e.preventDefault();
    $("#display").text(function(i, val) {
        if(val !== "0") {
            val += "3";
            return val;
        } else {
            return "3";
        }
    });
});

$("#4").click(function(e) {
    e.preventDefault();
    $("#display").text(function(i, val) {
        if(val !== "0") {
            val += "4";
            return val;
        } else {
            return "4";
        }
    });
});

$("#5").click(function(e) {
    e.preventDefault();
    $("#display").text(function(i, val) {
        if(val !== "0") {
            val += "5";
            return val;
        } else {
            return "5";
        }
    });
});

$("#6").click(function(e) {
    e.preventDefault();
    $("#display").text(function(i, val) {
        if(val !== "0") {
            val += "6";
            return val;
        } else {
            return "6";
        }
    });
});

$("#7").click(function(e) {
    e.preventDefault();
    $("#display").text(function(i, val) {
        if(val !== "0") {
            val += "7";
            return val;
        } else {
            return "7";
        }
    });
});

$("#8").click(function(e) {
    e.preventDefault();
    $("#display").text(function(i, val) {
        if(val !== "0") {
            val += "8";
            return val;
        } else {
            return "8";
        }
    });
});

$("#9").click(function(e) {
    e.preventDefault();
    $("#display").text(function(i, val) {
        if(val !== "0") {
            val += "9";
            return val;
        } else {
            return "9";
        }
    });
});

$("#0").click(function(e) {
    e.preventDefault();
    $("#display").text(function(i, val) {
        if(val !== "0") {
            val += "0";
            return val;
        } else {
            return "0";
        }
    });
});

$("#clear").click(function(e) {
    e.preventDefault();
    $("#display").text(0);
});

$("#equals").click(function(e) {
    e.preventDefault();
    var array = [];
    $("#display").text(function(index, val) {
        // for(var i = 0; i < val.length; i++) {
        //     if(Number.isInteger(Number.parseInt(val[i]))) {
        //         number += val[i];
        //     }
               
        // }

        //     numbers = Number.parseInt(number);
        
        
        array = val.split(val.match(/[*/+-]/));
        var number1 = array[0];
        var number2 = array[1];

        if(operator = "+") {
            var result = add(Number.parseInt(number1), Number.parseInt(number2));
            val = result;
            return result;
        }

        if(operator = "-") {
            return sub(Number.parseInt(number1), Number.parseInt(number2));
        }

        if(val[1] === "*") {
            return multiply(Number.parseInt(val[0]), Number.parseInt(val[2]));
        }

        if(val[1] === "/") {
            return divide(Number.parseInt(val[0]), Number.parseInt(val[2]));
        }
    });
});