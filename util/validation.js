const isStringNum = (input) => {
  if (Number.isNaN(Number(input))) return false;
  return true;
}

const isBetween1and100 = (input) => {
  const number = Number(input);
  if (number > 0 && number < 100) return true;
  return false
}

const doesArrayHaveItems = (arr) => {
  if (arr.length) return true;
  return false;
}

module.exports = {
  isBetween1and100,
  doesArrayHaveItems,
  isStringNum,
}