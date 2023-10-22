
// EXERCISE 3
// Make sure to solve two parts beneath

/** 
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

export  function getAverage(array) {
  // Your code goes here...
  var sum = 0;
   var added;
   var aver1;
  for (let i = 0; i < array.length; i++) {
    added = sum += array[i];
    aver1 = added/array.length;
  }
  return aver1;

}
getAverage([20, 22, 24, 26]);



/** 
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */ 

export function getStringSum(str) {
  // Your code goes here...
    var sum = 0;
     var added =0;
    var num1 = [];
    for (let i = 0; i < str.length; i++) {
      num1 = parseInt(str[i]);
      if(Number.isInteger(num1)){
       sum  += num1;
     } else if(!Number.isNaN(num1)){ 
      sum = 0;
     }
    }
    return sum;
  }
  getStringSum('GH2U87A');


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
