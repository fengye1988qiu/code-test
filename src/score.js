function score(dice) {
  const total = [];
  dice.forEach(number => {
    total[number] = total[number] ? total[number] + 1 : 1;
  });
  let result = 0;
  total.forEach((num, index) => {
    result += matchScore(num, index);
  });
  return result;
}

function matchScore(num, index) {
  if (num > 3) return matchScore(3, index) + matchScore(num - 3, index);
  switch (num) {
    case 1:
      if (index === 1) return 100;
      else if (index === 5) return 50;
      else return 0;
    case 3:
      if (index === 1) return 1000;
      else return index * 100;
    default:
      return 0;
  }
}
// score([2, 3, 4, 6, 2]);
score([1, 1, 1, 1, 3]);
