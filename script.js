function calculate() {
   var num1 = document.getElementById("firstnumber").value
   var num2 = document.getElementById("secondnumber").value

   var answer = parseInt(num1) + parseInt(num2)

   document.getElementById("answer").innerHTML = answer
}
