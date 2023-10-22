
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  var listBalance = [];
  var maxBalance = -Infinity;
  var person = [];
  var personOne;
  for(let i in array){
    listBalance.push(array[i].balance);

    if(listBalance[i]>= maxBalance){
      maxBalance = listBalance[i];

      if(array[i].balance === maxBalance){
       personOne = array[i];
      }
    }

  }
  person.push(personOne);
  return person;
}
import {bankAccounts} from '../data/data.js';
getClientWithGreatestBalance(bankAccounts);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
