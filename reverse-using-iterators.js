// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (revstr) => {
  let reversestr = '';
  const len = revstr.length;
  let i;
  for (i = len - 1; i >= 0; i -= 1) {
    reversestr += revstr[i];
  }
  return reversestr;
};

module.exports = reverse;
