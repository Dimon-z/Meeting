/* The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
 */
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubArr(arr) {
  if (arr == 0) {
    return 0;
  }
  const arrmap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined){
      arr[i] = 0;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arrmap.set(arr[i], [i]);
    for (let n = i + 2; n < arr.length + 1; n++) {
      const subArr = arr.slice(i, n);
      let sum = 0;
      for (let m = 0; m < subArr.length; m++) {
        sum += subArr[m];
      }
      arrmap.set(sum, [i, n]);
    }
  }
  console.log(arr)
  const subArrSum = Math.max(...arrmap.keys());
  return (`${subArrSum}:` + ' ' + `[${arr.slice(...arrmap.get(subArrSum))}]`);
}
console.log(maxSubArr([-2,-3,-5,0,-5,-8]));
