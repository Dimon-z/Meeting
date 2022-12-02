function timeoutPromise(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("done");
    }, interval);
  });
};

async function timeTestSlow() {
  await timeoutPromise(3000); //.then
  await timeoutPromise(3000); //.then
  await timeoutPromise(3000); //.then
}

async function timeTestFast() {
  const timeoutPromise1 = timeoutPromise(3000); //три независимых обьекта и у каждого свой .then 
  const timeoutPromise2 = timeoutPromise(3000); //благодаря чему промисы выполняются паралельно
  const timeoutPromise3 = timeoutPromise(3000);

  await timeoutPromise1;
  await timeoutPromise2;
  await timeoutPromise3;
}

let startTime = Date.now();
timeTestFast().then(() => {
  let finishTime = Date.now();
  let timeTaken = finishTime - startTime;
  console.log("Time taken in milliseconds: " + timeTaken);
})


async function raz() {
  throw Error('dva');
}
 
raz().catch(console.log);
/* Если ошибка не будет обработана, raz() вернет промис с реджектом. В этой ситуации вместо Promise.resolve вернется Promise.reject, содержащий ошибку.

Async-функции на выходе всегда дают промис, вне зависимости от того, что возвращается. */

const delayAndGetRandom = (ms) => {
  return new Promise(resolve => setTimeout(
    () => {
      const val = Math.trunc(Math.random() * 100);
      resolve(val);
    }, ms
  ));
};
 
async function fn() {
  const a = await 9;                            //a = 9
  const b = await delayAndGetRandom(1000);      //b = random
  const c = await 5;                            //c = 5
  await delayAndGetRandom(1000);                //пауза которая ничего не возвращает
 
  return a + b * c;
}
 
// Execute fn
fn().then(console.log);

/* Необработанные ошибки обертываются в rejected промис. Тем не менее в async-функциях можно использовать конструкцию 
try/catch для того, чтобы выполнить синхронную обработку ошибок.

async function canRejectOrReturn() {
  // wait one second
  await new Promise(res => setTimeout(res, 1000));
 
// Reject with ~50% probability
  if (Math.random() > 0.5) {
    throw new Error('Sorry, number too big.')
  }
 
return 'perfect number';
}


canRejectOrReturn() — это асинхронная функция, которая либо удачно выполняется (“perfect number”), 
либо неудачно завершается с ошибкой (“Sorry, number too big”).

async function foo() {
  try {
    await canRejectOrReturn();
  } catch (e) {
    return 'error caught';
  }
}

Поскольку в примере выше ожидается выполнение canRejectOrReturn, то собственное неудачное завершение повлечет за собой исполнение блока catch. 
В результате функция foo завершится либо с undefined (когда в блоке try ничего не возвращается), 
либо с error caught. В итоге у этой функции не будет неудачного завершения, поскольку try/catch займется обработкой самой функции foo. */

/* async function raz() {
  try {
    canRejectOrReturn();
  } catch (e) {
    return 'caught';
  }
}
В коде, как видно, нет ни await, ни return.
 Поэтому raz всегда завершается с undefined .
  Но промис будет выполняться. Если же он выдает ошибку или реджект, 
  то в этом случае будет вызываться UnhandledPromiseRejectionWarning. */