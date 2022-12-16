//продолжить последовательность чисел в массиве
const arr = [1, 0, 2, -2, 3, -4, 4, -6];
console.clear();

// -1 +2 -4 +5 -7 +8 -10

/* function continueSequence(arr,num = 200) {
  const result = arr.slice();
  for(let i = 1; i < num; i++) {
    result.push(i + 4, -6 + i * (-2));
  }
  return result
}
 */

// function getNextArray(array) {
//     const lastEl = () => array[array.length - 1];
//     array.push(lastEl() - 1);
//     array.push(lastEl() +2);
//     array.push(-lastEl());
//     array.push(-(lastEl() - 1));
//     array.push(-(lastEl() + 1));
//     array.push(-lastEl());
//     array.push(-(lastEl() + 2));
//     return array;
// }
// console.log(getNextArray([1]));
// console.log(getNextArray(getNextArray([1, 0, 2, -2, 3, -4, 4, -6])));

//создать и заполнить массив размером 150 элементов случайными элементами от 1 до 150
function createRandomArr() {
  const result = [];
  for (let i = 0; i < 150; i++) {
    let randomNum = Math.floor(Math.random() * 150) + 1;
    result.push(randomNum);
  }
  return result;
}

console.log(createRandomArr());

function addRandom(array, count = 150) {
  const ar = [...array];
  const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  };
  for (let i = 0; i < count; i++) {
    ar.push(getRandom(1, 150));
  }
  return ar;
}
const test = [2, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //[2],[5],
//создать функцию которая делит массив на 3 подмассива по двум заданым числам(первым встреченным слева),
function arrSplit(arr, splitStart, splitEnd) {
  let startIndex = arr.indexOf(splitStart);
  function findClosest(arr, spliter) {
    let startIndex = 0;
    arr.reduce((acc, elem, index) => {
      if (acc > Math.abs(elem - spliter)) {
        startIndex = index;
        return (acc = Math.abs(elem - spliter));
      }
      return acc;
    }, Math.abs(arr[0] - spliter));
    return startIndex;
  }
  if (startIndex === -1) startIndex = findClosest(arr, splitStart);
  const copyArr = arr.slice();
  const arr1 = copyArr.splice(0, startIndex + 1);
  let endIndex = copyArr.indexOf(splitEnd);
  if (endIndex === -1) endIndex = findClosest(copyArr, splitEnd);
  const arr2 = copyArr.splice(0, endIndex + 1);

  return [arr1, arr2, copyArr];
}
const testARR = createRandomArr();
console.log("testARR LOGGED: ", testARR);
console.log(arrSplit(testARR, 80, 90));

function splitArray(array, num1, num2) {
  const arr1 = array.slice(0, array.indexOf(num1));
  const arr2 = array.slice(arr1.length, array.indexOf(num2, arr1.length));
  const arr3 = array.slice(arr1.length + arr2.length);
  return [arr1, arr2, arr3];
}
//если такого числа в массиве нет, функция должна найти ближайшие и разделить по ним

function arrSplit11(arr, num1, num2) {
  function findClosestIdx(num, from = 0) {
    let closest = {}; // {idx value}
    for (let i = from; i < arr.length; i++) {
      const item = arr[i];
      if (item === num) return i;
      if (
        closest.idx == null ||
        Math.abs(closest.value - num) > Math.abs(item - num)
      ) {
        closest = { idx: i, value: item };
      }
    }

    return closest.idx;
  }

  const idx1 = findClosestIdx(num1);
  const idx2 = findClosestIdx(num2, idx1);

  return [
    arr.slice(0, idx1 + 1),
    arr.slice(idx1 + 1, idx2 + 1),
    arr.slice(idx2 + 1)
  ];
}

console.log("max solution", arrSplit11(testARR, 80, 90));

function splitArrayExtand(array, num1, num2) {
  let indexArray1Number;
  let indexArray2Number;
  const findNearlyIndex = (array, num, fromIndex) => {
    const minArr = array.map((item) => Math.abs(num - item));
    return minArr.indexOf(Math.min(...minArr), fromIndex) + 1;
  };

  indexArray1Number = array.includes(num1)
    ? array.indexOf(num1)
    : findNearlyIndex(array, num1);
  const arr1 = array.slice(0, indexArray1Number);
  indexArray2Number = array.includes(num2, arr1.length)
    ? array.indexOf(num2, arr1.length)
    : findNearlyIndex(array, num2, array.slice(arr1.length).length);
  const arr2 = array.slice(arr1.length, indexArray2Number);
  const arr3 = array.slice(arr1.length + arr2.length);
  return [arr1, arr2, arr3];
}

console.log("polo solution", splitArrayExtand(testARR, 80, 90));