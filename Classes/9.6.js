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

/*   static [Symbol.hasInstance](obj) {
    if (obj.say === 'pshhh i`m ssssnake') return true;
  }
 */
  farm() { console.log(`я фармлю ${this.farmSpeed} шт. золотых монет`); }

  move() { console.log(`я иду на ${this.stamina} метров`); }

  selfHeal() { console.log(`я лечусь на ${this.healAmount} хп`); }

  attack(targetName) { console.log(`я наношу  ${targetName} ${this.attackDMG} урона`); }

  regenerateStamina() { this.stamina = this.maxStamina; }
}

class MagePiton extends Piton {
  constructor(name, hp, maxStamina, healAmount, farmSpeed, attackDMG, mageDMG) {
    super(name, hp, maxStamina, healAmount, farmSpeed, attackDMG);
    this.mageDMG = mageDMG;
  }

  mageAttack(targetName) { super.attack(targetName); console.log(`и запускаю в ${targetName} фаерболл на  ${this.mageDMG} урона`); }
}

const piton = new MagePiton('mag', 80, 100, 25, 0, 1, 12);

class ForInstanceOf extends MagePiton {
   static [Symbol.hasInstance](obj){
        if (obj.say === 'pshhh i`m ssssnake') return true;
   }
}

const obj = { say: 'pshhh i`m ssssnake' };
console.log(obj instanceof Piton);
console.log(obj instanceof ForInstanceOf);

/* obj.__proto__.__proto__.__proto__ === Class.prototype? */

//-----------------  далее примеси-------------------------

class Weapon {
constructor(name, dmg){
    this.name = name;
    this.dmg = dmg;
}
}

class Gun extends Weapon {
    constructor(name, dmg, fireMode, clipSize, accuracyAuto, accuracySingle, accuracyBurst) {
        super(name,dmg)
        this.fireMode = fireMode;
        this.clipSize = clipSize;
        this.ammoLeft = clipSize;
        this.accuracyAuto = accuracyAuto;
        this.accuracySingle = accuracySingle;
        this.accuracyBurst = accuracyBurst;
    }
        changeFireMode(mode) {
            mode===auto ? this.fireMode = auto :
            fireMode ===`single`?this.fireMode = 1:
             mode ==='burst'? this.fireMode = 3:
              'Enter correct mode auto burst or single'
        }

        reload() {
            this.ammoLeft = clipSize;
        }

        fire(target){
            if (this.ammoLeft===0) {
                return `pls reload`
            }
            switch (this.fireMode) {
                case `auto`:
                    console.log(`нанес ${(this.dmg*this.accuracyAuto*this.clipSize)} урона по ${target}`)
                    this.ammoLeft = this.ammoLeft - this.clipSize;
                    break;
                case 3:
                    console.log(`нанес ${(this.dmg*this.accuracyBurst*this.fireMode)} урона по ${target}`)
                    this.ammoLeft = this.ammoLeft - this.fireMode;
                    break;
                case 1:
                    console.log(`нанес ${(this.dmg*this.accuracySingle*this.fireMode)} урона по ${target}`)
                    this.ammoLeft = this.ammoLeft - this.fireMode;
            }
    }
}

const m4a1 = new Gun('m4a1', 5, `auto`, 30, 0.2, 0.8, 0.5)

let objj = {
    fire: function(target){
        if (this.ammoLeft===0) {
        return `pls reload`
    }
    switch (this.fireMode) {
        case `auto`:
            console.log(`нанес ${(this.dmg*this.accuracyAuto*this.clipSize)} урона по ${target}`)
            this.ammoLeft = this.ammoLeft - this.clipSize;
            break;
        case 3:
            console.log(`нанес ${(this.dmg*this.accuracyBurst*this.fireMode)} урона по ${target}`)
            this.ammoLeft = this.ammoLeft - this.fireMode;
            break;
        case 1:
            console.log(`нанес ${(this.dmg*this.accuracySingle*this.fireMode)} урона по ${target}`)
            this.ammoLeft = this.ammoLeft - this.fireMode;
            break;
        default:
            console.log( `loxpidr`);
    }}
}
Object.defineProperty(objj, `fire`, {
    enumerable: false
  })  

Object.assign(Piton.prototype, objj); //ну ясно блджад это просто ебучий сахар
/* console.log(m4a1.fire)
console.log(piton) */
piton.fire(`guf`);
