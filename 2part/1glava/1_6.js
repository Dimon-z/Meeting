<!DOCTYPE html>
<html>
<body>

  <div data-widget-name="menu">Choose the genre</div>

  <script>
    let z  =document.querySelectorAll('[data-widget-name]')
    z[0].getAttribute(`data-widget-name`)
    typeof(z)
    console.log(z)
    console.dir(z)
  </script>
</body>
</html>


<!DOCTYPE html>
<html>
<body>
    <a name="list">the list</a>
    <ul>
      <li><a href="http://google.com">http://google.com</a></li>
      <li><a href="/tutorial">/tutorial.html</a></li>
      <li><a href="local/path">local/path</a></li>
      <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
      <li><a href="http://nodejs.org">http://nodejs.org</a></li>
      <li><a href="http://127.0.0.1:5500">http://internal.com/test</a></li>
    </ul>
    
    <script>
      let links = document.querySelectorAll('a')
      for (link of links) {
        let x = link.href;                                                  //вот тут есть вопросик по решению в ljs 
        if (x.includes('//')&&!x.includes('http://127.0.0.1:5500')){        //вопросик решился тем что задача залупы фильтрация внутренних ссылок через '//'
            link.style.color = 'orange';                                    //возник другой вопросик мы можем поймать рандомные ссылки в DOM-е? 
    }                                                                       //или почему в задаче настаивают на использовании именно хтмла?
}
    </script>
</body>
</html>

