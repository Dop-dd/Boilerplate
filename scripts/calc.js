// creating a prototype in case of changes in code.

Calculator = function() {
    this.value = 0;
}

Calculator.prototype.add = function(number) { // function take s one number as an argument
    if (typeof(number) == "number") {
        this.value += number;        
    } else {
        alert("Error");
    }
}



/*function addition(num1, num2) {
    if (typeof(num1) == "number" && typeof(num2) == "number") {
    return num1 + num2;
    } else {
        alert("Error");
    }   
}
*/