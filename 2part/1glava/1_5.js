Мое решение
let li = document.querySelectorAll('li');
console.log(li)
for(let i=0; i<li.length; i++ ){
  let title = li[i].firstChild.data
  title = title.trim()
  let number = li[i].getElementsByTagName('li').length;
  console.log(title + ': ' + number);
}

{/* решение с LJS
<script>
for (let li of document.querySelectorAll('li')) {
  // получаем название из текстового узла
  let title = li.firstChild.data;

  title = title.trim(); // удаляем лишние пробелы c конца строки

  // считаем количество потомков
  let count = li.getElementsByTagName('li').length;

  alert(title + ': ' + count);
}
</script>
 */}

//console.dir(document) => смотрим прототипы // так же можно написать цикл чтобы пройти по цепочке и вывести