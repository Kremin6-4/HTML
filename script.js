const num1 = document.getElementById("number");
const num2 = document.getElementById("our_number");
const btn1 = document.getElementById("increment");
btn1.addEventListener("click", () => {
  num.innerHTML++;
});
const btn2 = document.getElementById("decrement");
btn2.addEventListener("click", () => {
  num.innerHTML--;
});
const btn3 = document.getElementById("reset");
btn3.addEventListener("click", () => {
  num.innerHTML= "1";
});
const btn4 = document.getElementById("Red");
btn4.addEventListener("click", () => {
  num.style="color:red;" ;
});

const btn5 = document.getElementById("Green");
btn5.addEventListener('click', () => {
  num.style="color:green;" ;
});
const btn6 = document.getElementById("Blue");
btn6.addEventListener('click', () => {
  num.style="color:blue;" ;
});
const btn7 = document.getElementById("result");
btn7.addEventListener('click', () => {
   num.innerHTML= "result" 
});
 <script>
  var op;
  function func() {
    var result;
    var num1 = Number(document.getElementById("number").value);
    var num2 = Number(document.getElementById("our_number").value);
    switch (op) {
      case 'plus':
        result = num1 + num2;
        break;
      case 'minus':
        result = num1 - num2;
        break;
      case 'times':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2) {
          result = num1 / num2;
        } else {
          result = 'бесконечность';
        }
        break;
      default:
        result = 'выберите операцию';
    }

    document.getElementById("result").innerHTML = result;
  }
</script>
