// Compare two dictionaries

// let compare = (first_values, ...parameters_LIST) => {
//   const second_values = parameters_LIST[0];
//   let a = Object.keys(first_values);
//   let b = Object.keys(second_values);
//   if (a.join('-') !== b.join('-')) return false;
//   let e = true;
//   for (c of a) {
//     if (first_values[c] === second_values[c]) e = e && true;
//     else {
//       e = e && false;
//     }
//   }
//   return e;
// };

'use strict'; 

const compare = (dict1, dict2) => {
  const dict1Keys = Object.keys(dict1); // think about sort()
  const dict2Keys = Object.keys(dict2); // think about sort()
  if (dict1Keys.join('-') !== dict2Keys.join('-')) return false;
  for (const key of dict1Keys) {
    if(dict1[key] !== dict2[key]) return false;
  }
  return true;
};

require('../Tests/compare.js')(compare);
