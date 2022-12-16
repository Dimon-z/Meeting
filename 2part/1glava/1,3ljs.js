/* Для страницы:

<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>

Напишите код, как получить…

    элемент <div>?
    <ul>?
    второй <li> (с именем Пит)?
 */
    DOM-узел элемента <div>:

    document.body.firstElementChild
    // или
    document.body.children[0]
    // или (первый узел пробел, поэтому выбираем второй)
    document.body.childNodes[1]
    
    DOM-узел элемента <ul>:
    
    document.body.lastElementChild
    // или
    document.body.children[1]
    
    Второй <li> (с именем Пит):
    
    // получаем <ul>, и его последнего ребёнка
    document.body.lastElementChild.lastElementChild

/* 
    Вопрос о соседях
важность: 5

Если elem – произвольный узел DOM-элемента…

    Правда, что elem.lastChild.nextSibling всегда равен null?
    Правда, что elem.children[0].previousSibling всегда равен null ?

 */

    Да. Верно. Элемент elem.lastChild всегда последний, у него нет ссылки nextSibling.
    Нет. Неверно. Потому что elem.children[0] – потомок-элемент. Но перед ним могут быть другие узлы. Например, previousSibling может быть текстовым узлом.

Обратите внимание, что в обоих случаях, если детей нет, то будет ошибка. При этом elem.lastChild равен null, а значит – ошибка при попытке доступа к elem.lastChild.nextSibling.


/*     Выделите ячейки по диагонали
важность: 5

Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:

//  в переменной td находится DOM-элемент для тега <td>
td.style.backgroundColor = 'red'; */
<!DOCTYPE HTML>
<html>
<head>
  <style>
    table {
      border-collapse: collapse;
    }

    td {
      border: 1px solid black;
      padding: 3px 5px;
    }
  </style>
</head>

<body>
  <table>
    <tr>
      <td>1:1</td>
      <td>2:1</td>
      <td>3:1</td>
      <td>4:1</td>
      <td>5:1</td>
    </tr>
    <tr>
      <td>1:2</td>
      <td>2:2</td>
      <td>3:2</td>
      <td>4:2</td>
      <td>5:2</td>
    </tr>
    <tr>
      <td>1:3</td>
      <td>2:3</td>
      <td>3:3</td>
      <td>4:3</td>
      <td>5:3</td>
    </tr>
    <tr>
      <td>1:4</td>
      <td>2:4</td>
      <td>3:4</td>
      <td>4:4</td>
      <td>5:4</td>
    </tr>
    <tr>
      <td>1:5</td>
      <td>2:5</td>
      <td>3:5</td>
      <td>4:5</td>
      <td>5:5</td>
    </tr>
  </table>
  <script>
    let table = document.body.firstElementChild;

    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      row.cells[i].style.backgroundColor = 'red';
    }
  </script>
</body>
</html>