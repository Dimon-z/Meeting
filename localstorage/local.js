localStorage.user = JSON.stringify({ name: "guf", status: "RIP" });
let user = JSON.parse(localStorage.user);
console.log(user.name, user.status);

window.addEventListener("storage", (event) => {
  if (event.key != "guf") return;
  alert(event.key + ":" + event.newValue + " at " + event.url);
});

localStorage.setItem("guf", "Рипнулся");
