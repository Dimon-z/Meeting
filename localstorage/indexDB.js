let openRequest = indexedDB.open(name, version); // success upgradeneeded error

let openRequest = indexedDB.open("store", 1);

openRequest.onupgradeneeded = function () {};

openRequest.onerror = function () {
  console.error("Error", openRequest.error);
};

openRequest.onsuccess = function () {
  let db = openRequest.result;
};

let openRequest = indexedDB.open("store", 2);

openRequest.onupgradeneeded = function (event) {
  let db = openRequest.result;
  switch (event.oldVersion) {
    case 0:
      break;
    case 1:
      break;
  }
};

let openRequest = indexedDB.open("store", 2);

openRequest.onsuccess = function() {
  let db = openRequest.result;

  db.onversionchange = function() {
    db.close();
    alert("База данных устарела, пожалуйста, перезагрузите страницу.")
  };
};

openRequest.onblocked = function() {
  // это событие не должно срабатывать, если мы правильно обрабатываем onversionchange
};

db.createObjectStore(name[, keyOptions]);

db.deleteObjectStore('name')