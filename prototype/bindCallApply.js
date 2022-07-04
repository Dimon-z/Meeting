const zpInCity = {
  moscow: 'over9000',
};

function zp(job, staj) {
  console.log(`Зп:${this.moscow}, Работа:${job}, Стаж:${staj}`);
}

/* function myBind(fn, obj, ...rest) {
  return function () {
    Object.fn = fn;
    obj.__proto__ = Object;
    obj.fn(...rest);
  };
}
myBind(zp, zpInCity, 'frontend', '9')(); */


Function.prototype.myBind = function (obj,...rest){
    Function.__proto__=obj;
    let f = this;
    console.log(f);
    ()=>f(rest);
}

zp.myBind(zpInCity,'frontend', '9')();

