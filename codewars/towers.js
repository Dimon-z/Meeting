function towerBuilder(nFloors) {
  let floor = 1;
  const tower = [];
  let i;
  tower.push(floor);
  for (i = 0; i < nFloors - 1; i++) {
    floor += 2;
    tower.push(floor);
  }
  let answer = [];
  answer = tower.map((element) => '*'.repeat(element));
  for (let index = nFloors; index >= 0; index--) {
    const spaces = tower[i] - tower[index];
    answer[index].push(' '.repeat(spaces / 2));
  }
  return answer;
}
console.log(towerBuilder(5));
