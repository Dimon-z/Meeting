function f() {
  console.log('Hello!');
}
Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

f.defer(1000); // выведет "Hello!" через 1 секунду

function sum(a, b) {
  console.log(a + b);
}

Function.prototype.defer = function (ms) {
  const fn = this;
  return function (...rest) {
    setTimeout(() => fn.apply(this, rest), ms);
  };
};

sum.defer(1000)(1, 2); // выведет 3 через 1 секунду.

f.apply.apply.apply;