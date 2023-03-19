const source = [1, 2, 3];

const iterator = source[Symbol.iterator]();

for (const value of iterator) {
  console.log(value);
  if (value === 1) {
    break;
  }
  console.log("This string will not be logged.");
}
// 1
console.log('разделитель')
// следующий цикл, использующий наш генератор
// продолжает с места остановки
for (const value of iterator) {
  console.log(value);
}
// 2
// 3

// генератор остановился
// в следующем цикле итераций не будет.
for (const value of iterator) {
  console.log(value);
}
// ничего не выведет

//Генератор реализует метод return(), который заставляет генератор при выходе остановить выполнение. Мы больше не сможем по нему итерироваться.

/* function* source() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = source();

for (const value of generator) {
  console.log(value);
  if (value === 1) {
    break;
  }
  console.log("This string will not be logged.");
}
// 1

// генератор остановился
// в следующем цикле итераций не будет.
for (const value of generator) {
  console.log(value);
}
//ничего не выведет
 */