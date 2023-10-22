
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // Your code goes here...
  var depositsList = [];
  var bankList = [];
  var finalList = [];
  for (let i in array) {
    var sum = 0;
    depositsList.push(array[i].deposits);

    for(let j in depositsList[i]){
      sum += depositsList[i][j]
    }

    bankList.push(sum);
    if(bankList[i] < 2000){
      finalList.push(array[i]);
      
    }
 
}
return finalList;
}
import {bankAccounts} from '../data/data.js';
getAllAccountsWithSumsOfDepositsLess2000(bankAccounts)



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
