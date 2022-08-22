class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

const arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty());

let filteredArr = arr.filter(item => item >= 10);
console.log(filteredArr);
console.log(filteredArr.isEmpty().push(`test`)); // false */

class PowerArray extends Array {
    isEmpty() {
      return this.length === 0;
    }

    // built-in methods will use this as the constructor
    static get [Symbol.species]() {
      return Array;                 // вместо PowerArray возвращает Array
    }
  }

  let arr = new PowerArray(1, 2, 5, 10, 50);
  console.log(arr.isEmpty()); // false

  // filter creates new array using arr.constructor[Symbol.species] as constructor
  let filteredArr = arr.filter(item => item >= 10);

  // filteredArr is not PowerArray, but Array
  //console.log(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function
  console.log(filteredArr.push(`test`));
  console.log(filteredArr) //[ 10, 50, 'test' ]


