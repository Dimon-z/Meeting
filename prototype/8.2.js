let music = {
    govno: false,
};

function Rap4ik(name) {
    this.name = name;
}

Rap4ik.prototype = music;
let rap4ik = new Rap4ik("AK-47")
console.log(rap4ik.govno);
rap4ik.govno = true;
console.log(rap4ik.govno);
console.log(music.govno);
console.log(Rap4ik.govno); // у конструктора нет такого свойства поэтому андеф.

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();
console.log(Rabbit.prototype.eats);
delete Rabbit.prototype.eats;

console.log( rabbit.eats ); // ?
let rip = new Rabbit();
console.log(rip.eats);