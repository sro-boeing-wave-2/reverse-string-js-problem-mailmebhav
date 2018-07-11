// The intent of this file is to reverse
// the string using built in functions.
const reverse = (revstr) => {
  const splitstr = revstr.split('').reverse().join('');
  return splitstr;
};

module.exports = reverse;
