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

  static hpCompare(pitonA, pitonB) {
    return pitonA.hp - pitonB.hp;
  }

  static author = "By me"

  farm() { console.log(`я фармлю ${this.farmSpeed} шт. золота`); }

  move() { console.log(`я иду на ${this.stamina} метров`); }

  selfHeal() { console.log(`я лечусь на ${this.healAmount} хп`); }

  attack(targetName) { console.log(`я снимаю ${targetName} ${this.attackDMG} хп`); }

  regenerateStamina() { this.stamina = this.maxStamina; }
}
const pitons = [
  new Piton('kusya1', 100, 80, 20, 10, 30),
  new Piton('kusya2', 120, 80, 20, 10, 28),
  new Piton('kusya3', 80, 80, 20, 10, 35),
];
console.log(pitons.sort(Piton.hpCompare));
