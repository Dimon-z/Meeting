//хотим бахнуть скрипт в страницу

function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}

  loadScript('/my/script.js'); // в скрипте есть "function newFunction() {…}"

  newFunction(); // такой функции не существует!

//функция не успела прогрузиться. Нам нужно дать время на загрузку и знать когда она будет завершена

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(script);
  
    document.head.append(script);
  }

loadScript('/my/script.js', function() {
    // эта функция вызовется после того, как загрузится скрипт
    newFunction(); // теперь всё работает
    ...
  });

//Вроде ОК, но что если нам нужно подгрузить много скриптов?
loadScript('/my/script.js', function(script) {

    loadScript('/my/script2.js', function(script) {
  
      loadScript('/my/script3.js', function(script) {
        // ...и так далее, пока все скрипты не будут загружены
      });
  
    })
  
  });

//все еще терпимо, добавим обработку ошибок

loadScript('1.js', function(error, script) {

    if (error) {
      handleError(error);
    } else {
      // ...
      loadScript('2.js', function(error, script) {
        if (error) {
          handleError(error);
        } else {
          // ...
          loadScript('3.js', function(error, script) {
            if (error) {
              handleError(error);
            } else {
              // ...и так далее, пока все скрипты не будут загружены (*)
            }
          });
  
        }
      })
    }
  });

// уже становится некомфортно. Мы пришли к пирамиде коллбеков. Можно сделать на отдельных функциях

loadScript('1.js', step1);

function step1(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', step2);
  }
}

function step2(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('3.js', step3);
  }
}

function step3(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...и так далее, пока все скрипты не будут загружены (*)
  }
};

//Вроде получше, но есть способ написать лучше, Промисы.