function calculate() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
  
    if (num1 === "" || num2 === "") {
      alert("Please enter both numbers.");
      return;
    }
  
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers.");
      return;
    }
  
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
  
    var result = 0;
  
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers.");
      return;
    }
  
    var operation = document.getElementById("operation").value;
  
    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        if (num2 === 0) {
          alert("Division by zero is not allowed.");
          return;
        }
        result = num1 / num2;
        break;
      default:
        alert("Invalid operation selected.");
        return;
    }
  
    document.getElementById("result").innerHTML = "Result: " + result;
  }
  