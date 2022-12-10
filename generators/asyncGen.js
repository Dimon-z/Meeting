async function* generatePersonAsync(){
    yield "Tom";    
}
const personGenerator = generatePersonAsync();
personGenerator.next() // при обращении к методу next() возвращается объект Promise

.then(data => console.log(data))    // {value: "Tom", done: false} Promise, в свою очередь, возвращает объект с двумя свойствами { value, done }, где value собственно хранит возвращаемое значение, а done указывает, доступны ли в генераторе еще данные.

//.then(data => console.log(data.value));  // Tom при обращении к свойству value полученного из промиса получить сами данные



async function* generatePersonAsync1(){
    yield "Tom";
    yield "Sam";
    yield "Bob";
}
let person
/* async function printPeopleAsync(){
    const personGenerator = generatePersonAsync1();
    while(!(person = await personGenerator.next()).done){ //С помощью оператора await из метода next() генератора мы можем получить данные
        console.log(person.value);
    }
} */

async function printPeopleAsync(){
    const personGenerator = generatePersonAsync1();
    for await(person of personGenerator){ //Поскольку асинхронный генератор представляет асинхронный итератор, то данные генератора также можно получить через цикл for-await-of
        console.log(person);
    }
}
printPeopleAsync();
//превращение синхронного итератора в асинхронный 
async function* syncToAsyncIterable(syncIterable) {
    for (const elem of syncIterable) {
      yield elem;
    }
  }
//превращение асинхронного итератора в массив
async function asyncIterableToArray(asyncIterable) {
    const result = [];
    for await (const value of asyncIterable) {
      result.push(value);
    }
    return result;
  }