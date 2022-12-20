var btn_toggle = document.getElementsByClassName("btn-toggle");
var menu_toggle = document.getElementsByClassName("menu-toggle");

window.toggleOn = function (this_element, event) {
  event.stopPropagation();
  menu_toggle[0].style.display = "flex";
  btn_toggle[0].style.display = "none";
}

window.toggleOff = function () {
  menu_toggle[0].style.display = "none";
  btn_toggle[0].style.display = "flex";
}
