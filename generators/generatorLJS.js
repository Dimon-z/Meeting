/* Пример такой формулы, которая генерирует более-менее равномерно распределённые значения:

next = previous * 16807 % 2147483647

Если мы используем 1 как зерно, то значения будут:

    16807
    282475249
    1622650073
    …и так далее…

Задачей является создать функцию-генератор pseudoRandom(seed), которая получает seed и создаёт генератор с указанной формулой.

Пример использования:

let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073 */
const alert = console.log;

function* pseudoRandom(seed) {
    let num = seed;
    while(1) {
    num = num * 16807 % 2147483647;
    yield num;
}
}
let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073 */