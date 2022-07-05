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
Function.prototype.myApply = function (obj,args) {
  let applySymbol = Symbol("apply");
  obj[applySymbol] = this;
  return obj[applySymbol](...args);
};

zpha.myApply(moscow, ['frontend']);

zpha.myApply(piter, ['1']);

zpha.myApply(regioni, [1, 2]);

Function.prototype.myBind = function (obj,...args) {
  let bindSymbol = Symbol("bind");
  obj[bindSymbol] = this;
  return function (...rest) {
    args.splice(0,[rest].length,...rest)
    obj[bindSymbol](...args);
  }
};

zpha.myBind(moscow, 'frontend', '9')();

zpha.myBind(piter, '1')( 0, 4);

zpha.myBind(regioni, 3, 4)(1);
