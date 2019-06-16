function josephusSurvivor(n, k) {
  const people = [];
  while (people.length < n) people.push(people.length + 1);
  let lastIndex = 0;
  let survivor = 0;
  while (people.length) {
    lastIndex = (k + lastIndex - 1) % people.length;
    survivor = people.splice(lastIndex, 1);
  }
  return survivor[0];
}
josephusSurvivor(7, 3);
