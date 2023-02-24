<select id="genres">
  <option value="rock">Рок</option>
  <option value="blues" selected>Блюз</option>
</select>

<script>
  let selectedOption = genres.options[genres.selectedIndex];
  alert( selectedOption.value );
  alert( selectedOption.text );

  let newOption = new Option("Классика", "classic");
  genres.append(newOption);

  newOption.selected = true;
</script>


//----------------------------------------------------//

<!DOCTYPE HTML>
<html>

<head>
  <link type="text/css" rel="stylesheet" href="my.css">
  <meta charset="utf-8">
</head>

<body>
  <div id="view" class="view">Текст</div>

  <script>
    let area = null;
    let view = document.getElementById('view');

    view.onclick = function() {
      editStart();
    };

    function editStart() {
      area = document.createElement('textarea');
      area.className = 'edit';
      area.value = view.innerHTML;

      area.onkeydown = function(event) {
        if (event.key == 'Enter') {
          this.blur();
        }
      };

      area.onblur = function() {
        editEnd();
      };

      view.replaceWith(area);
      area.focus();
    }

    function editEnd() {
      view.innerHTML = area.value;
      area.replaceWith(view);
    }
  </script>

</body>
</html>