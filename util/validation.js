const isNumber = (input) => {
  if (isNaN(input)) return false;
  return true;
}

const isBetween1and100 = (input) => {
  const number = Number(input);
  if (number > 0 && number <= 100) return true;
  return false
}

const isArrayLengthy = (arr) => {
  if (arr.length) return true;
  return false;
}

module.exports = {
  isBetween1and100,
  isArrayLengthy,
  isNumber,
}