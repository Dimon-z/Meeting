/* function* getNumber() {
    const first = yield 1;
    const second = yield 2;
    const third = yield 3;
} */
/* function* getNumber() {
    console.log('start');

    const first = yield 1;
    console.log(first);

    const second = yield 2;
    console.log(second);

    const third = yield 3;
    console.log(third);
} */
let first;
let second;
let third;

function* getNumber() {
    console.log('start');

    first = yield 1;
    console.log(first);

    second = yield 2;
    console.log(second);

    third = yield 3;
    console.log(third);
}

for (let element of getNumber()) {
    console.log(element);
}
const iterator = getNumber();

/* console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); */

console.log(iterator.next('абсолютли неважно что тут'));// в первый yield мы пишем из второго некста поэтому это значение не используется
console.log(iterator.next(3+5)); //yield 2 => 3+5
console.log(iterator.next('c')); //8 =>мы можем передать что то в генератор на основе чего он нам вернет что то в next()
console.log(iterator.return(`guf rip`)) // метод return завершает генератор и опционально передает в него значение
console.log(iterator.next('d'));
console.log(iterator.next('F')); //генератор завершился у нас больше нет елды поэтому последний обьект не содержит значения не передает значение и выводит уведомление о завершении

console.log(first)
console.log(third)




function* generate() {
    while(true) {
      try {
         yield 'Hello';
      } catch(e) {
        console.log('Error!');
      }
    }
  }
  
  let gen = generate();
  gen.next();
  // { value: 'Hello', done: false }
  g.throw(new Error('Error'));
  // "Error caught!"

  
function* generate1() {
    yield 1;
    yield* generate2();
   }
  
  function* generate2() {
    yield 2;
    yield 3;
    yield 4;
  }
  
  let gen = generate1();
  console.log(gen.next()); // { value: 1, done: false }
  console.log(gen.next()); // { value: 2, done: false }
  console.log(gen.next()); // { value: 3, done: false }
  console.log(gen.next()); // { value: 4, done: false }
  console.log(gen.next()); // { value: undefined, done: true }
  