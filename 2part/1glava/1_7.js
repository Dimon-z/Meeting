/* Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

<ol id="elem">
  <li>Привет</li>
  <li>Мир</li>
</ol>

<script>
  function clear(elem) {  ваш код }

  clear(elem); // очищает список
</script> */


function clear(elem) {
    for (let i = elem.childNodes.length-1; i <= 0 ; i--) {
        elem.childNodes[i].remove();
    }
  }

//----------------------------------------------------------------------------//

  <!DOCTYPE HTML>
<html>
<body>
  <h1>Создать список</h1>

  <script>
    let ul = document.createElement('ul');
    document.body.append(ul);

    while (true) {
      let data = prompt("Введите текст для элемента списка", "");

      if (!data) {
        break;
      }

      let li = document.createElement('li');
      li.textContent = data;
      ul.append(li);
    }
  </script>

</body>
</html>

//------------------------------------------------//

<!DOCTYPE html>
<html>
<body>

  <div id="container"></div>

  <script>
    let data = {
      "Рыбы": {
        "форель": {},
        "лосось": {}
      },

      "Деревья": {
        "Огромные": {
          "секвойя": {},
          "дуб": {}
        },
        "Цветковые": {
          "яблоня": {},
          "магнолия": {}
        }
      }
    };

    function createTree(container, obj) {
      container.append(createTreeDom(obj));
    }

    function createTreeDom(obj) {
      // если нет дочерних элементов, то вызов возвращает undefined
      // и элемент <ul> не будет создан
      if (!Object.keys(obj).length) return;

      let ul = document.createElement('ul');

      for (let key in obj) {
        let li = document.createElement('li');
        li.innerHTML = key;

        let childrenUl = createTreeDom(obj[key]);
        if (childrenUl) {
          li.append(childrenUl);
        }

        ul.append(li);
      }

      return ul;
    }

    let container = document.getElementById('container');
    createTree(container, data);
  </script>

</body>
</html>

//---------------------------------------------------------------------//

<!DOCTYPE HTML>
<html>
<body>

  <ul>
    <li>Животные
      <ul>
        <li>Млекопитающие
          <ul>
            <li>Коровы</li>
            <li>Ослы</li>
            <li>Собаки</li>
            <li>Тигры</li>
          </ul>
        </li>
        <li>Другие
          <ul>
            <li>Змеи</li>
            <li>Птицы</li>
            <li>Ящерицы</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Рыбы
      <ul>
        <li>Аквариумные
          <ul>
            <li>Гуппи</li>
            <li>Скалярии</li>
          </ul>
        </li>
        <li>Морские
          <ul>
            <li>Морская форель</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>

  <script>
    let lis = document.getElementsByTagName('li');

    for (let li of lis) {
      // получить количество всех <li> ниже этого <li>
      let descendantsCount = li.getElementsByTagName('li').length;
      if (!descendantsCount) continue;

      // добавить непосредственно к текстовому узлу (добавить к тексту)
      li.firstChild.data += ' [' + descendantsCount + ']';
    }
  </script>

</body>
</html>

//------------------------------------------------------------------------------// 
