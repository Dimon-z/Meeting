class Piton {
    constructor(name, maxStamina, healAmount, farmSpeed, attackDMG) {
      this.name = name;
      this.maxStamina = maxStamina;
      this.farmSpeed = farmSpeed;
      this.healAmount = healAmount;
      this.attackDMG = attackDMG;
      this.stamina = 0;
    }

    #canFly = false;

    canFly = true;
    
    _hp = 100;

    _test = 1;

    set hp(value) {
      if (value < 0) throw new Error("hp can`t be lower zero");
      this._hp = value;
    }
  
    get hp() {
      return this._hp;
    }

    farm() { console.log(`я фармлю ${this.farmSpeed} шт. золота`); }
  
    move() { console.log(`я иду на ${this.stamina} метров`); }
  
    selfHeal() { console.log(`я лечусь на ${this.healAmount} хп`); }
  
    attack(targetName) { console.log(`я снимаю ${targetName} ${this.attackDMG} хп`); }
  
    regenerateStamina() { this.stamina = this.maxStamina; }
  }

  class Mage extends Piton {
    constructor() {
      super()}

      //private() {console.log(`${super[#canFly]}`)}

      public() {console.log(super._test) }
  }

 console.log( new Mage(`mage`).canFly)
 //console.log( new Mage(`mage`).#canFly)