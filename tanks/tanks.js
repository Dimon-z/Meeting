console.clear();

делаем поле 100 на 100 пикселей. вычисляем рабочую область экрана. вычисляем масштаб. масштабируем через переменную масштаба.

ограничиваем коллизию рабочей областью 

const tank = document.getElementById("tank");
const map = new Map([
  [
    "KeyW",
    () => {
      tank.style.top = parseInt(tank.style.top) - 75 + "px";
      tank.style.transform = "rotate(0deg)";
    }
  ],
  [
    "KeyA",
    () => {
      tank.style.left = parseInt(tank.style.left) - 75 + "px";
      tank.style.transform = "rotate(-90deg)";
    }
  ],
  [
    "KeyS",
    () => {
      tank.style.top = parseInt(tank.style.top) + 75 + "px";
      tank.style.transform = "rotate(180deg)";
    }
  ],
  [
    "KeyD",
    () => {
      tank.style.left = parseInt(tank.style.left) + 75 + "px";
      tank.style.transform = "rotate(90deg)";
    }
  ],
  ["Space", () => {}]
]);

const KEYS = ["KeyW", "KeyA", "KeyS", "KeyD", "Space"];

function keyHandler(e) {
  e.preventDefault();

  if (KEYS.includes(e.code)) {
    map.get(e.code)();
  }
}

document.addEventListener("keypress", keyHandler);

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateObject() {
  const x = randomInt(1, 10);
  const y = randomInt(1, 10);

  console.log(x, y);

  const object = document.createElement("div");
  object.classList.add("object");
  object.style.left = x * 75 + "px";
  object.style.top = y * 75 + "px";
  const body = document.querySelector("body");
  body.appendChild(object);
}

generateObject();
generateObject();
generateObject();
generateObject();
generateObject();
