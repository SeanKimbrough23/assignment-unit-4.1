console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function hello( name) {
  return 'Hello Jake!';
}

console.log('Hello Name Function', hello);
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber , secondNumber) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}
console.log('The sum of 2 arguments', addNumbers(3,8));

// 4. Function to multiply three numbers & return the result
function multiplyThree(numberOne,numberTwo,numberThree ){
  return numberOne * numberTwo * numberThree;

}
console.log('The product of 3 numbers', multiplyThree(3,7,5));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else 
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(4) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

function getLast(array){
  if (array.length>0){
    return array[array.length-1];
  }
}
console.log (' Return last item in Array', getLast[7,6,4,3,1,10]);


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let arrayOfNumbers = [2, 14, 8, 26, 0, 52, 7];

function find( value, array ){  
 for (let i = 0; i < arrayOfNumbers.length; i++){
    if (value ===arrayOfNumbers[i]){
       return true;
     } 
     else
  return false;
}
}


console.log('Value of array' ,find(3,6));
console.log('Value of Array', find(14,1));
console.log('Value of Array', find(2,2));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
if (string.startsWith(letter, string)){
  return true;
}
else 
return false;
}

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
console.log('isFirstLetter - should say true' , isFirstLetter('k', 'kangaroo'));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let numberArray = [0,8,66,43,2,24];
  let sum = 0
  for (let i=0; i < numberArray.length; i++){
  // TODO: loop to add items
  sum += numberArray[i]; // I do have a question here: why if I change it to * sum += numberArray[i++] * the answer is 68, I don't understand how it gets 68
  }
  return sum;
  }

console.log(sumAll([0,8,66,43,2,24]));






// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
