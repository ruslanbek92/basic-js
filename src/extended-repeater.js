const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
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
//   let newString;

//   if(options.seperator===undefined){
//     options.seperator="+";
//   }
//   if(options.additionSeperator===undefined){
//     options.additionSeperator="|";
//   }

//   if(typeof str!=="string"){
//     str=""+str;
//   }

//   if(typeof addition!=="string"){
//     options.addition=""+options.addition;
//   }

//   // console.log(options);
//   if(options.additionRepeatTimes1==undefined){
//     for(let i=0; i<options.additionRepeatTimes;i++){
//       str=str.concat(options.additionSeperator,options.addition);
//       }

//   }
//   // console.log(str);
//   newString=str;
//   if(options.repeatTimes!==undefined){
//     for(let i=0;i<options.repeatTimes-1;i++){
//       newString=newString.concat(options.seperator,str);
//       }
//   }

// // console.log(str);
// return newString;
}

module.exports = {
  repeater,
};
