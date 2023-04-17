const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *

 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
let string = (typeof str === 'string') ? str : String(str);

let repeatTimes = 0;
let additionRepeatTimes = 0;
let separator = "+";
let additionSeparator = "|";
let result = additionResult = addition = "";

if (options !== undefined) {
  addition = (options.addition !== undefined) ? String(options.addition) : addition;
  repeatTimes = (options.repeatTimes !== undefined) ? options.repeatTimes : repeatTimes;
  additionRepeatTimes = (options.additionRepeatTimes !== undefined )? options.additionRepeatTimes : additionRepeatTimes;
  separator = (options.separator !==undefined) ? options.separator : separator;
  additionSeparator = (options.additionSeparator !==undefined) ? options.additionSeparator : additionSeparator;
}
result = string;
let arr = [];
if(repeatTimes>0){
  for (let i = 0; i < repeatTimes; i++) {
    arr.push(string);
  }
  result = arr.join(separator);
}

additionResult = addition;
arr = [];
if (additionRepeatTimes>0) {
  for (let i = 0; i < additionRepeatTimes; i++) {
    arr.push(addition);
  }
  additionResult = arr.join(additionSeparator);
}

return result.split(separator).map((el)=>el+=additionResult).join(separator);

}

module.exports = {
  repeater,
};
