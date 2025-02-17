function mulOfTwoNumbers(num1, num2) {
  return num1 * num2;
}

console.log(mulOfTwoNumbers()); //this will throw us an error because we didnt pass an arguement

//default parameters
function mulOfTwoNumbers(num1 = 2, num2 = 3) {
  return num1 * num2;
}

console.log(mulOfTwoNumbers()); //even without passing any parameters we will get 6

function mulOfTwoNumbers(num1 = 2, num2 = 3) {
  return num1 * num2;
}

console.log(mulOfTwoNumbers(10, 20)); //the default values have been overwritten by the arguements we passed,
//   also if we provide num1 arguement and not for num2, num1 will be overwritten but num2 default parameters will be used
