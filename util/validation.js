export const isNumber = (input) => {
  if (isNaN(input)) return false;
  return true;
}

export const isBetween1and100 = (input) => {
  const number = Number(input);
  if (number > 0 && number <= 100) return true;
  return false
}
