function isValidWalk(walk) {
  let vectorNS = 0;
  let vectorEW = 0;
  for (let i = 0; i < 10; i++) {
    if (walk[i] == 'n') {
      vectorNS += 1;
    }
    if (walk[i] == 's') {
      vectorNS -= 1;
    }
    if (walk[i] == 'e') {
      vectorEW += 1;
    }
    if (walk[i] == 'w') {
      vectorEW -= 1;
    }
  }
  console.log(vectorEW);
  console.log(vectorNS);
  console.log(walk.length);
  if (vectorEW === 0 && vectorNS === 0 && walk.length === 10) {
    return true;
  }
  return false;
}
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's',]));

https://www.codewars.com/kata/54da539698b8a2ad76000228/javascript