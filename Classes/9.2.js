/* class Piton {
  constructor(name, hp, maxStamina, healAmount, farmSpeed, attackDMG) {
    this.name = name;
    this.hp = hp;
    this.maxStamina = maxStamina;
    this.farmSpeed = farmSpeed;
    this.healAmount = healAmount;
    this.attackDMG = attackDMG;
    this.stamina = 0;
  }

  farm() { console.log(`я фармлю ${this.farmSpeed} шт. золотых монет`); }

  move() { console.log(`я иду на ${this.stamina} метров`); }

  selfHeal() { console.log(`я лечусь на ${this.healAmount} хп`); }

  attack(targetName) { console.log(`я наношу  ${targetName} ${this.attackDMG} урона`); }

  regenerateStamina() { this.stamina = this.maxStamina; }
}

const boevoyPiton = new Piton('kusya', 120, 80, 20, 10, 30);

class MagePiton extends Piton {
  constructor(name, hp, maxStamina, healAmount, farmSpeed, attackDMG, mageDMG) {
    super(name, hp, maxStamina, healAmount, farmSpeed, attackDMG);
    this.mageDMG = mageDMG;
  }

  mageAttack(targetName) { super.attack(targetName); console.log(`и запускаю в ${targetName} фаерболл на  ${this.mageDMG} урона`); }
}

const piton = new MagePiton('mag', 80, 100, 25, 0, 1, 12);
piton.mageAttack('Baks');
piton.move();
piton.attack('jopa');
piton.regenerateStamina();
piton.move();
piton.farm();
 */

class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name) {
     
      this.created = Date.now();
      super(name); 

    }
  }
  
/*   let rabbit = new Rabbit("Белый кролик"); 
  console.log(rabbit); */

