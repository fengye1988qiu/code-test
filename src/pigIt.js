function pigIt(str) {
  return (
    str.split(' ').map(s => {
      if (s !== '!') {
        s = s + s[0] + 'ay';
        s = s.split('');
        s[0] = '';
      }
      return (s + '').replace(/,/g, '');
    }) + ''
  ).replace(/,/g, ' ');
}

console.log(pigIt('asd !'));
