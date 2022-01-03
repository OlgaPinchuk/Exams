// Extract substring between prefix and suffix

// getvaluebetween = (str, p, s) => {
//   i = str.indexOf(p)
//     if ( i === -1 ) return ''
//     else {
//       k = i + p.length
//       str =  str.substring(k)
//       if ( s) {
//         i = str.indexOf( s )
//         if (i === -1) {
//           return  '' } else { str =  str.substring(0 , i)
//             }}}
//   return str
// }

const getValueBetween = (str, prefix, suffix) => {
  const prefixIndex = str.indexOf(prefix);
  const suffixIndex = suffix && str.indexOf(suffix, prefixIndex);
  if (prefixIndex === -1 || suffixIndex === -1) {
    return "";
  } else {
    const startPosition = prefixIndex + prefix.length;
    str = str.substring(startPosition, suffixIndex);
  }
  return str;
};

const result = getValueBetween("Hello <username> and bye!", "<", ">");
console.log(result);
