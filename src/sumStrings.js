function sumStrings(a, b) {
  let c = [];
  let i = a.length > b.length ? a.length - 1 : b.length - 1;
  while (i >= 0) {
    if (!a[i]) {
      a = '0' + a;
      continue;
    }
    if (!b[i]) {
      b = '0' + b;
      continue;
    }
    let sum = Number.parseInt(a[i] || 0) + Number.parseInt(b[i] || 0) + Number.parseInt(c[i] || 0);
    c[i] = sum % 10;
    if (Number.parseInt(sum / 10) > 0) {
      if (i === 0) c.unshift(1);
      else c[i - 1] = 1;
    }
    i--;
  }
  return (c + '').replace(/,/g, '').replace(/\b(0+)/gi, '');
}

console.log(sumStrings('8797', '45') + '');
