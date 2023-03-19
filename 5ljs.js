/* Создайте функцию preloadImages(sources, callback), 
которая загружает все изображения из массива sources и, 
когда все они будут загружены, вызывает callback */

function preloadImages(sources, callback) {
    let counter = 0;

    function onLoad() {
      counter++;
      if (counter == sources.length) callback();
    }

    for(let source of sources) {
      let img = document.createElement('img');
      img.onload = onLoad;
      img.onerror = onLoad;
      img.src = source;
    }
  }