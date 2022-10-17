const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let newDigit;
  // let numInStr = Array.from(String(n));
  // console.log("number in string is" + numInStr);
  // min = Number(numInStr[0]);
  // console.log("min before searching" + min);
  // for (let i = 0; i < numInStr.length; i++) {
  //   min = (min > numInStr[i]) ? Number(numInStr[i]) : min;
  // }
  // console.log("min after search" + min);
 
  // numInStr = numInStr.join("").replace(String(min), "");
  // console.log("shortened string number is " + numInStr);
  // newDigit = Number(numInStr);

  // return newDigit;

  let numInArray = Array.from("" + n);
  console.log("numinArray is"+numInArray);
  let shortenedNumbers=[];
  for (let i = 0; i < numInArray.length; i++){
    let arr=[...numInArray];
    arr[i] = "";
    shortenedNumbers.push(arr);
  }

  console.log("shortened numbers is" + shortenedNumbers);
  for (let i = 0; i < shortenedNumbers.length; i++){
    shortenedNumbers[i] = Number(shortenedNumbers[i]);
  }
  console.log("shortened number after conversion to number"+shortenedNumbers);

  return newDigit = Math.max(...shortenedNumbers);

}


module.exports = {
  deleteDigit
};
