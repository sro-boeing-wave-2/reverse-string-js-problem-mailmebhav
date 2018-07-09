// The intent of this file is to reverse
// the string using built in functions.
const reverse = (revstr) => {
  const splitstr = revstr.split('');
  const reversearr = splitstr.reverse();
  const joinarr = reversearr.join('');
  return joinarr;
};

module.exports = reverse;
