class Piton {
  constructor(name, hp, maxStamina, healAmount, farmSpeed, attackDMG) {
    this.name = name;
    this.hp = hp;
    this.maxStamina = maxStamina;
    this.farmSpeed = farmSpeed;
    this.healAmount = healAmount;
    this.attackDMG = attackDMG;
    this.stamina = 0;
  }

  farm() { console.log(`я фармлю ${this.farmSpeed} шт. золота`); }

  move() { console.log(`я иду на ${this.stamina} метров`); }

  selfHeal() { console.log(`я лечусь на ${this.healAmount} хп`); }

  attack(targetName) { console.log(`я снимаю ${targetName} ${this.attackDMG} хп`); }

  regenerateStamina() { this.stamina = this.maxStamina; }
}

const boevoyPiton = new Piton('kusya', 120, 80, 20, 10, 30);
boevoyPiton.farm();
boevoyPiton.move();
boevoyPiton.selfHeal();
boevoyPiton.regenerateStamina();
boevoyPiton.move();

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    const date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = `0${hours}`;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = `0${minutes}`;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = `0${seconds}`;

    const output = this.template
      .replace('h', hours)
      .replace('m', minutes)
      .replace('s', seconds);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 10);
  }
}

const clock = new Clock({ template: 'h:m:s' });
clock.start();
