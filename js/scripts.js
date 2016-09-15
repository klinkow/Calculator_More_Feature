
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var percentage = function(number1, number2) {
  return (number1 / number2)*100+"%";
};

var converttoC = function(number1) {
  return (number1 - 32)*(5/9);
};

var converttoF = function(number1)  {
  return (number1 * 1.8)+32;
};

$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    } else if (operator === "percentage") {
      result = percentage(number1, number2);
    } else if (operator === "converttoC") {
      result = converttoC(number1);
    } else if (operator === "converttoF") {
      result = converttoF(number1);
    }

    $("#output").text(result);
  });
});
