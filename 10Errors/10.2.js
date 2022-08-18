import { Piton } from "../Classes/9.1.js";

class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = this.constructor.name;
    }
}

function checkPiton(piton) {
    if (!piton.name) {
        throw new ValidationError(`не указано имя питона`)
    }
    if (!piton.hp) {
        throw new ValidationError(`не указано хп питона`)
    }
    if (!piton.maxStamina) {
        throw new ValidationError(`не указана максимальная выносливость питона`)
    }
    if (!piton.attackDMG) {
        throw new ValidationError(`не указан урон питона`)
    }
}

const guf = new Piton(`guf`, 2000, 21, 2123, 2,null)

guf.regenerateStamina().move()

//checkPiton(guf)

class WrongDataError extends ValidationError {
    constructor(message){
        super(message);
    }
}

function checkPitonData(piton) {
    if (piton.hp<=80||piton.hp>=200) {
        throw new WrongDataError(`хп питона должно быть между 80 и 200`)
    }
}

checkPitonData(guf);
