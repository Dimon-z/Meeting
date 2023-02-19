//----скрытие по нажатию на кнопку------//
<body>

  <input type="button" id="hider" value="Нажмите, чтобы спрятать текст" />

  <div id="text">Текст</div>

  <script>
    document.getElementById('hider').onclick = function() {
      document.getElementById('text').hidden = true
    }
  </script>
</body>
</html>

//----------------скрытие кнопки----------//
<input type="button" onclick="this.hidden=true" value="Нажми, чтобы спрятать"></input>

//---------------мячек------------------//
<head>

  <style>
    #field {
      width: 200px;
      height: 150px;
      border: 10px solid black;
      background-color: #00FF00;
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }

    #ball {
      position: absolute;
      left: 0;
      top: 0;
      width: 40px;
      height: 40px;
      transition: all 1s;
    }
  </style>
</head>

<body style="height:2000px">

  Нажмите на поле для перемещения мяча.
  <br>


  <div id="field">
    <img src="https://ru.js.cx/clipart/ball.svg" id="ball"> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
  </div>

  <script>
    let move = function(event) {
      let fieldCoords = this.getBoundingClientRect();

      // мяч имеет абсолютное позиционирование (position:absolute), поле - относительное (position:relative)
      // таким образом, координаты мяча рассчитываются относительно внутреннего, верхнего левого угла поля
      let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
      };
      if (ballCoords.top < 0) ballCoords.top = 0;
      if (ballCoords.left < 0) ballCoords.left = 0;
      if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
      }
      if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
      }

      ball.style.left = ballCoords.left + 'px';
      ball.style.top = ballCoords.top + 'px';
    }
    field.addEventListener('click',func ) 
  </script>

</body>


//-------------------------------------------------//


<body>

  <div>
    <div class="pane">
      <h3>Лошадь</h3>
      <p>Домашняя лошадь — животное семейства непарнокопытных, одомашненный и единственный сохранившийся подвид дикой лошади, вымершей в дикой природе, за исключением небольшой популяции лошади Пржевальского.</p>
    </div>
    <div class="pane">
      <h3>Осёл</h3>
      <p>Домашний осёл (лат. Equus asinus asinus), или ишак, — одомашненный подвид дикого осла (Equus asinus), сыгравший важную историческую роль в развитии хозяйства и культуры человека и по-прежнему широко в хозяйстве многих развивающихся стран.</p>
    </div>
    <div class="pane">
      <h3>Кошка</h3>
      <p>Кошка, или домашняя кошка (лат. Felis silvestris catus), — домашнее животное, одно из наиболее популярных(наряду с собакой) «животных-компаньонов». Являясь одиночным охотником на грызунов и других мелких животных, кошка — социальное животное, использующее для общения широкий диапазон звуковых сигналов.</p>
    </div>
  </div>


  <script>
    let panes = document.querySelectorAll('.pane');

    for(let pane of panes) {
      pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
      pane.firstChild.onclick = () => pane.remove();
    }
  </script>

</body>
