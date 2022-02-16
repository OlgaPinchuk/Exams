// Extract substring between prefix and suffix

// getvaluebetween = (str, p, s) => {
//   i = str.indexOf(p);
//   if (i === -1) return '';
//   else {
//     k = i + p.length;
//     str = str.substring(k);
//     if (s) {
//       i = str.indexOf(s);
//       if (i === -1) {
//         return '';
//       } else {
//         str = str.substring(0, i);
//       }
//     }
//   }
//   return str;
// };

'use strict';

const getValueBetween = (str, from, to) => {
  const start = str.indexOf(from);
  const end = to && str.indexOf(to);
  if (start === -1 || end === -1) return '';
  const startIndex = start + from.length;
  return str.substring(startIndex, end);
};

require('../Tests/between.js')(getValueBetween);
