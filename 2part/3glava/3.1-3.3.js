<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
  <style>
    .selected {
      background: #0f0;
    }

    li {
      cursor: pointer;
    }
  </style>
</head>

<body>

  Кликни на элемент списка, чтобы выделить его.
  <br>

  <ul id="ul">
    <li>Кристофер Робин</li>
    <li>Винни Пух</li>
    <li>Тигра</li>
    <li>Кенга</li>
    <li>Кролик. Просто Кролик.</li>
  </ul>

  <script>
    ul.onclick = function(event) {
      if (event.target.tagName != "LI") return;

      if (event.ctrlKey || event.metaKey) {
        toggleSelect(event.target);
      } else {
        singleSelect(event.target);
      }

    }

    // предотвращает ненужное выделение элементов списка при клике
    ul.onmousedown = function() {
      return false;
    };

    function toggleSelect(li) {
      li.classList.toggle('selected');
    }

    function singleSelect(li) {
      let selected = ul.querySelectorAll('.selected');
      for(let elem of selected) {
        elem.classList.remove('selected');
      }
      li.classList.add('selected');
    }

  </script>

</body>
</html>

//---------------------------------------------------------------------------------\\


