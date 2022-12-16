/* Поиск элементов
важность: 4

Вот документ с таблицей и формой.

Как найти?…

    Таблицу с id="age-table".
    Все элементы label внутри этой таблицы (их три).
    Первый td в этой таблице (со словом «Age»).
    Форму form с именем name="search".
    Первый input в этой форме.
    Последний input в этой форме.

Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.
 */

let table = document.getElementById('age-table')
document.querySelectorAll('#age-table label')
table.querySelector('td')
document.querySelector('form[name="search"]')
form.querySelector('input')
let inputs = form.querySelectorAll('input')
inputs[inputs.length-1]