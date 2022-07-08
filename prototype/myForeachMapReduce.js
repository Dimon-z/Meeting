/* arr.forEach(function(item, index, array) {
     ... делать что-то с item
  }); */

Array.prototype.myForeach = function (fn, thisArg = {}) {
  const array = [this];
  if (!thisArg) {
    const myForeachSymbol = Symbol('myForeach');
    thisArg[myForeachSymbol] = fn;
    for (let index = 0; index < array.length; index++) {
      thisArg[myForeachSymbol](this[index], index, array);
    }
  } else {
    for (let index = 0; index < this.length; index++) {
      fn(this[index], index, array);
    }
  }
};

const arr = [1, 2, 3, 4, 5];

console.log(arr);

const newarr = [];
arr.forEach((element) => console.log(element));
console.log(arr);

arr.myForeach((element) => console.log(element));
['Bilbo', 'Gandalf', 'Nazgul'].myForeach((item, index, array) => {
  console.log(`${item} имеет позицию ${index} в ${array}`);
});

console.log(arr);

Array.prototype.myMap = function (fn, thisArg = {}) {
  const array = [this];
  const newarr = [];
  if (!thisArg) {
    const myForeachSymbol = Symbol('myMap');
    thisArg[myForeachSymbol] = fn;
    for (let index = 0; index < array.length; index++) {
      newarr[index] = thisArg[myForeachSymbol](this[index], index, array);
    }
  } else {
    for (let index = 0; index < this.length; index++) {
      newarr[index] = fn(this[index], index, array);
    }
    return newarr;
  }
};

const mappedarr = arr.myMap((x) => x *= 2);
const testarr = arr.myMap(Math.pow);
console.log(mappedarr);
console.log(testarr);


let value = arr.reduce(function(previousValue, item, index, array) {
  // ...
}, [initial])

array.reduce(callback[, initialValue])

Array.prototype.myReduce = function (fn, thisArg = {}) {
  const array = [this];
  const newarr = [];
  if (!thisArg) {
    const myReduceSymbol = Symbol('myReduce');
    thisArg[myReduceSymbol] = fn;
    for (let index = 0; index < array.length; index++) {
      newarr[index] = thisArg[myReduceSymbol](this[index], index, array);
    }
  } else {
    for (let index = 0; index < this.length; index++) {
      newarr[index] = fn(this[index], index, array);
    }
    return newarr;
  }
};