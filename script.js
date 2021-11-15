//Prompt 1. Write a function which accepts two numbers as arguments. The function should return the sum of the two numbers.

let sumFunction = function(num1, num2) {
    return num1 + num2;
  }
  console.log(sumFunction (1,2))
  
  //arrowfunction version
  
  let sumFunction2 = (num1, num2) => num1 + num2;
  
  console.log(sumFunction2 (3,5))
  
  //Prompt 2. Write a function that accepts four arguments, each will be a number. The function should add the first two numbers together; add the third and fourth numbers; and return the result of multiplying both sums together.
  
  let sumMultiplyFunction = function(num1, num2, num3, num4) {
    return (num1 + num2) * (num3 + num4);
  }
  console.log(sumMultiplyFunction (2,3,4,5))
  
  //Prompt 3. Write a function which accepts two numbers. The function should return the larger number.
  
  let largerNumber = function(num1, num2) {
    if (num1 > num2){
      return num1;
    }
    else if (num2 > num1){
      return num2;
    }
    else {
      return "Numbers are equal";
    }
  }
  
  console.log(largerNumber (2, 5))
  
  //Prompt 4. Write a function which accepts an array as an argument. Each item in the array will be a number. The function should add all the numbers in the array and return the result. 
  
  let sumOfArray = 0;
  let arrayAdder = function(array) {
    for (i = 0; i < array.length; i++){
      sumOfArray += array[i];
    }
    return sumOfArray;
  }
  console.log(arrayAdder([10, 20, 10]));
  
  