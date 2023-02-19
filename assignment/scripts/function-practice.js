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

function helloName(name) {
  return `Hello, ${name}!`;
}

console.log(helloName('Sean')); // Hello, Sean
console.log(helloName('Kris')); // Hello, Kris
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
console.log('The product of 3 numbers', multiplyThree(3,7,5)); //output expected 105


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
        return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(4) ); // expect true
console.log( 'isPositive - should say false', isPositive(0) ); // expect false
console.log( 'isPositive - should say false', isPositive(-3) ); // expect false
console.log( 'isPositive - should say true', isPositive(60) ); // expect true


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

function getLast(array){
  if (array.length>0){
    return array[array.length-1];
  }
}
console.log (' Return last item in Array', getLast([7,6,4,3,1,10]));
console.log('Return last item in array', getLast(['apple','juice','orange','kiwi']))//expected kiwi


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let array1 = ['Stove', 'Microwave', 'Spoon', 'Knife', 'Oven', 'Dishes'];
function find( value, array ){  
 for (let i = 0; i < array.length; i++){
    if (value === array1[i]) {
       return true;
     } else {
    return false;
     }
  } 
}   
console.log('Is this value (Spoon) in array? - should say true:', find('Spoon', array1)); //output should be true
console.log('Value of array (Oven in array?' ,find('Oven', array1));// output should be true
console.log('Value of Array', find('Napkin',array1)); //output should be false 
console.log('Value of Array', find('Knife', array1)); // output should be true
console.log('Value of array', find('Dishes', array1)); //output should be true

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string[0] === letter) {
    return true;
  } else {
    return false;
  }
}

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
console.log('isFirstLetter - should say true' , isFirstLetter('k', 'kangaroo'));

// 9. Function to return the sum of all numbers in an array
const numberArray = [0,8,66,43,2,24];

function sumAll(array) {
  let sum = 0
  for (let i in array){
  // TODO: loop to add items
  sum += array[i]; // I do have a question here: why if I change it to * sum += numberArray[i++] * the answer is 68, I don't understand how it gets 68
  }
  return sum;
  }
console.log('Sum of Array:', sumAll(numberArray)); //output 143
console.log(sumAll([7,25,8])); //output expected: 40

// cannot figure out how to get it to add new item to array each time

  




// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let newArray = [-5, 10, 54, 12, -1, 3];

let positiveArray = newArray.filter(function(num){
  return num > -1;
  function getPositives(newArray){
    const positiveArray = newArray.filter(num => num > -1);
    return positiveArray;
}});
console.log('new array is', positiveArray);




// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Write a function that takes an integer minutes and converts it to seconds. (from edabit.com)


function convert(minutes) {
  let seconds = minutes * 60;
  return seconds;
}
console.log('Minutes are now seconds',convert(5)); // output: 300 seconds
console.log('Minutes are now seconds',convert(10)); // output: 600 seconds
console.log('Minutes are now seconds',convert(60)); //output: 3600 seconds

