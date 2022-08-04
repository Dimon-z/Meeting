//что происходит при вызове конструктора?
/* 
1.Создаётся новый пустой объект, и он присваивается this.
2.Выполняется код функции. Обычно он модифицирует this, добавляет туда новые свойства.
3.Возвращается значение this.
 */

// ошибка с супер https://youtu.be/QcC8FtZ8Gqo?t=4842,
/* 
В ноде действительно тайп эррор в файрфоксе и хроме референс эррор как я и говорил
*/

//цепочка наследования 

class A {};
class B extends A {};
const instanceB = new B;
A.prototype <= тут методы А
B.prototype <= тут методы B
instanceB.__proto__ == B.prototype
B.__proto__ == A
B.prototype.__proto__ == A.prototype
instanceB.__proto__.__proto__ === A.prototype