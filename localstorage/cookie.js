for (let index = 0; index < document.cookie.length; index++) {
    console.log(document.cookie);
}


document.cookie = encodeURIComponent("тут был") + encodeURIComponent("я и не я;") + `path=/treeBelow;` + `expires=Tue, 19 Jan 2028 03:14:07 GMT;`+ `samesite=lax;`

`domain=site.com `   `domain=forum.site.com` `domain=.site.com`

//expires//max-age
let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();

document.cookie = encodeURIComponent("user = тут был") + encodeURIComponent(" я и не я;") + `path=/treeBelow;` + date + `SameSite=none;`

document.cookie = `user=guf; max-age=3600`//3600s

document.cookie = "user=guf; secure";// https

httponly 

// возвращает куки с указанным name,
// или undefined, если ничего не найдено
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  setCookie('user', 'John', {secure: true, 'max-age': 3600});

  Если скрипт устанавливает куки, то нет разницы откуда был загружен скрипт – куки принадлежит домену текущей веб-страницы.