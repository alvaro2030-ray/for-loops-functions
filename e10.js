// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  var nameList = [];
  var names;
  var finalList = [];
  for (let i in array){
    nameList.push(array[i].name);
    names = nameList[i];
    for(let j in names){
      if(names[j].toLowerCase() === letter){
        finalList.push(names);
      }
    }
  }
  return finalList;
}
import {bankAccounts} from '../data/data.js';
   
getClientsWithLetterInName(bankAccounts, 'a');
getClientsWithLetterInName(bankAccounts, 'c');
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
