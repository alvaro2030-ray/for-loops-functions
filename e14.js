
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  var list = [];
  var withdrawal1 = [];
  var deposit1 = [];
  for(let i in array){
    var depositSum =0;
    var withdrawalSum = 0;
    var der = 0;
    deposit1.push(array[i].deposits);
    withdrawal1.push(array[i].withdrawals);
    for(let j in deposit1[i]){
      depositSum += deposit1[i][j];
    }
    for(let j in withdrawal1[i]){
      withdrawalSum += withdrawal1[i][j];
    }
  der = depositSum - withdrawalSum;
  if(der !==array[i].balance){
    list.push(array[i]);
  }
  }
  return list;
  }



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
