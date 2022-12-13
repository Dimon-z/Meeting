var summation = function (num) {
  let sum = 0;
  for (let i=num; i>=0; i--) {
    sum = sum +i
  }
  return sum
}

console.log(summation(3))