document.getElementById("plus").addEventListener("click", add);

document.getElementById("min").addEventListener("click", minus);

document.getElementById("keer").addEventListener("click", multiply);

document.getElementById("deel").addEventListener("click", divide);
 
function validateInputs() {

  var num1 = parseFloat(document.getElementById("num1").value);

  var num2 = parseFloat(document.getElementById("num2").value);

  if (num1 > 0 && num2 > 0) {

    return true;

  } else {

    document.getElementById("result").textContent = "Het getal is te laag";

    return false;

  }

}
 
function add() {

  if (validateInputs()) {

    var num1 = parseFloat(document.getElementById("num1").value);

    var num2 = parseFloat(document.getElementById("num2").value);

    var result = num1 + num2;

    document.getElementById("result").textContent = result;

  }

}
 
function minus() {

  if (validateInputs()) {

    var num1 = parseFloat(document.getElementById("num1").value);

    var num2 = parseFloat(document.getElementById("num2").value);

    var result = num1 - num2;

    document.getElementById("result").textContent = result;

  }

}
 
function multiply() {

  if (validateInputs()) {

    var num1 = parseFloat(document.getElementById("num1").value);

    var num2 = parseFloat(document.getElementById("num2").value);

    var result = num1 * num2;

    document.getElementById("result").textContent = result;

  }

}
 
function divide() {

  if (validateInputs()) {

    var num1 = parseFloat(document.getElementById("num1").value);

    var num2 = parseFloat(document.getElementById("num2").value);

    if (num2 === 0) {

      document.getElementById("result").textContent = "Kan niet delen door 0";

    } else {

      var result = num1 / num2;

      document.getElementById("result").textContent = result;

    }

  }

}