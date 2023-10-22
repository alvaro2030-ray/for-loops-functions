// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastPositiveBalance(array) {
  // Your code goes here...
  
  var bankAccount1 = [];
  var notBrokeAccount = [];
  var finalAccount = [];
  var oneAccount = [];
  var small = 0;
  for(let i in array) {
    notBrokeAccount.push(array[i].balance);
    if(notBrokeAccount[i] > 0){
      bankAccount1.push(notBrokeAccount[i]);
  }
    small = Math.min(...bankAccount1)
    if(array[i].balance === small){
      finalAccount = array[i];
    }
    }
    oneAccount.push(finalAccount);
    return oneAccount;
  }
  import {bankAccounts} from '../data/data.js';
  getClientWithLeastPositiveBalance(bankAccounts);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function