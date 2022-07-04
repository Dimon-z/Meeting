const snake = {
  talks: 'pshhh',
  move() {
    console.log('ssssliding');
  },
  set fullName(nameSurname) {
    [this.name, this.surname] = nameSurname.split(' ');
  },
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};
const python = {
  isLazy: true,
};
python.__proto__ = snake;
/* alert(python.talks);
alert(python.isLazy); */
python.move();
console.log(1);

python.color = 'green';
console.log(python.color);

python.chill = function () {
  console.log('python smokes a hooooookah');
};
python.chill();
/* snake.chill(); */
python.fullName = 'escape from';
console.log(python.fullName);
console.log(snake.fullName);
snake.fullName = 'Mega guf';
console.log(snake.fullName);
console.log(python.fullName);

const head = {
  glasses: 1,
};

const table = {
  pen: 3,
  __proto__: head,
};

const bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

const pockets = {
  money: 2000,
  __proto__: bed,
};
console.log(pockets.glasses);
console.log(head.glasses);

const hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

const speedy = {
  stomach: [],
  __proto__: hamster,
};

const lazy = {
  stomach: [],
  __proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat('apple');
lazy.eat('orange');
speedy.eat('orange');
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple
