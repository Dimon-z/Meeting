const snake = {
  talks: 'pshhh',
  move() {
      console.log('ssssliding');
  },
  set fullName(nameSurname) {
      [this.name, this.surname] = nameSurname.split(" ");
  },
  get fullName() {
      return `${this.name} ${this.surname}`;
  },
};
let python = {
  isLazy: true,
};
python.__proto__ = snake;
/* alert(python.talks);
alert(python.isLazy); */
python.move();
console.log(1);

python.color = 'green';
console.log(python.color);

python.chill = function(){
    console.log('python smokes a hooooookah');
}
python.chill();
/* snake.chill(); */
python.fullName = `escape from`;
console.log(python.fullName);
console.log(snake.fullName);
snake.fullName = `Mega guf`;
console.log(snake.fullName);
console.log(python.fullName);