function firstNonRepeatingLetter(s) {
  let _s = s.toUpperCase();
  for (let i = 0; i < s.length; i++) {
    const target = _s[i];
    if (target === '_') {
      continue;
    }
    _s = _s.replace(target, '_');
    if (_s.indexOf(target) === -1) return s[i];
    else _s = _s.replace(new RegExp(target, 'g'), '_');
  }
}
const result = firstNonRepeatingLetter('moonmen');
console.log(result);
