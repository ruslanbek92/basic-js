const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str ) {
  let newStr="";
  for (let i = 0; i < str.length; i++){
    let count = 1;
    for (let j = i+1; j < str.length; j++){
      if (str[i] === str[j]) {
        count++;
        i++;
      } else {
        break;
      }
    }
    newStr= newStr.concat(count,str[i]);

  }

  for (let i = 0; i < newStr.length; i++){
    newStr = newStr.replace("1", "");
  }
  
  return newStr;
}

module.exports = {
  encodeLine
};
