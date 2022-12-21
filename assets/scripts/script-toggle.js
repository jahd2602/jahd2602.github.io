var btn_toggle = document.getElementsByClassName("btn-toggle")[0];
var menu_toggle = document.getElementsByClassName("menu-toggle")[0];
var main_container = document.getElementById("main-container");

main_container.addEventListener("click", function (event) {
  menu_toggle.style.display = "none";
  btn_toggle.style.display = "flex";
});

btn_toggle.addEventListener("click", function (event) {
  event.stopPropagation();
  menu_toggle.style.display = "flex";
  this.style.display = "none";
});
