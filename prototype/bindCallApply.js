const moscow = {
  zp: 'over9000',
};
const piter = {
  zp: 'over4500',
};
const regioni = {
  zp: true,
};

function zpha(job, staj) {
  console.log(`Зп:${this.zp}, Работа:${job}, Стаж:${staj}`);
}

/* function myBind(fn, obj, ...rest) {
  return function () {
    Object.fn = fn;
    obj.__proto__ = Object;
    obj.fn(...rest);
  };
}
myBind(zpha, zpInCity, 'frontend', '9')(); */

Function.prototype.myApply = function (obj,args) {
  obj.fn = this;
  return obj.fn(...args);
};

zpha.myApply(moscow, ['frontend']);

zpha.myApply(piter, ['1']);

zpha.myApply(regioni, [1, 2]);

Function.prototype.myBind = function (obj,...args) {
  obj.fn = this;
  return function () {
    obj.fn(...args);
  }
};
zpha.myBind(moscow, 'frontend', '9')();

zpha.myBind(piter, '1')();

zpha.myBind(regioni, 1, 2)();

