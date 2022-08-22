//Синтаксис создания Promise:

let promise1 = new Promise(function(resolve, reject) {
  // обрабатываем результат промиса
});

// состояние промиса изменяется только 1 раз, остальные попытки игнорируются.
// Так же resolve(value) и reject(new Error()) могут принимать максимум 1 аргумент, остальные игнорируются
let promise2 = new Promise(function(resolve, reject) {
    resolve("done");
  
    reject(new Error("…")); // игнорируется
    setTimeout(() => resolve("…")); // игнорируется
  });

/*У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства:

state («состояние») — вначале "pending" («ожидание»), потом меняется на "fulfilled" («выполнено успешно») 
при вызове resolve или на "rejected" («выполнено с ошибкой») при вызове reject.
result («результат») — вначале undefined, далее изменяется на value при вызове resolve(value) или на error при вызове reject(error).
 */

let promise3 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
  });
  
  // resolve запустит первую функцию, переданную в .then
  promise3.then(
    result => console.log(result), // выведет "done!" через одну секунду
    error => console.log(error) // не будет запущена
  );
//Если мы заинтересованы только в результате успешного выполнения задачи, то в then можно передать только одну функцию:

let promise4 = new Promise(resolve => {
  setTimeout(() => resolve("done!"), 1000);
});

promise4.then(console.log); // выведет "done!" спустя одну секунду

let promise5 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Ошибка!")), 1000);
  });
  
  // .catch(f) это то же самое, что promise.then(null, f)
  promise5.catch(console.log); // выведет "Error: Ошибка!" спустя одну секунду

  new Promise((resolve, reject) => {
    /* сделать что-то, что займёт время, и после вызвать resolve/reject */
  })
    // выполнится, когда промис завершится, независимо от того, успешно или нет
    .finally(/* () => остановить индикатор загрузки */)
    .then(/* result => показать результат, err => показать ошибку */)

/* Обработчик, вызываемый из finally, не имеет аргументов. В finally мы не знаем, как был завершён промис. 
И это нормально, потому что обычно наша задача – выполнить «общие» завершающие процедуры.
Обработчик finally «пропускает» результат или ошибку дальше, к последующим обработчикам. */


//Если промис в состоянии ожидания, обработчики в .then/catch/finally будут ждать его. Однако, если промис уже завершён, то обработчики выполнятся сразу:
// при создании промиса он сразу переводится в состояние "успешно завершён"
let promise6 = new Promise(resolve => resolve("готово!"));

promise6.then(console.log); // готово! (выведется сразу)

// задачи 

/* Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:
function delay(ms) {
  // ваш код
}
delay(3000).then(() => alert('выполнилось через 3 секунды')); */

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
delay(3000).then(() => console.log('выполнилось через 3 секунды'));
//-----------------------------------------------------------------------------------------------------------------------------------------------
/* Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка таким образом, чтобы она возвращала промис, вместо того чтобы принимать в аргументы функцию-callback.

Новое использование:

showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
}); */

function go() {
  showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
  });
}

function showCircle(cx, cy, radius) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);

  return new Promise(resolve => {
    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        resolve(div);
      });
    }, 0);
  })
}