function persistence(num) {
  return getTimes(0, num);
}

function getTimes(times, num) {
  num = '' + num;
  if (num.length === 1) return times;
  let result = 1;
  for (let i = 0; i < num.length; i++) {
    result = result * Number.parseInt(num[i]);
  }
  return getTimes(++times, result);
}

console.log(persistence(39));
