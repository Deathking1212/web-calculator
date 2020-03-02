function calculate() {
   var num1 = document.getElementById("firstnumber").value
   var num2 = document.getElementById("secondnumber").value

   var opselector = document.getElementById("operator")
   var operator = opselector.options[opselector.selectedIndex].value

   switch (operator) {
        case 'add':
           var answer = parseInt(num1) + parseInt(num2)
           break
        case 'subtract':
            var answer = parseInt(num1) - parseInt(num2)
            break
        case 'divide':
            var answer = parseInt(num1) / parseInt(num2)
            break
        case 'multiply':
            var answer = parseInt(num1) * parseInt(num2)
            break
        default:
            var answer = "invalied operator type"
   }

   document.getElementById("answer").innerHTML = answer
}
