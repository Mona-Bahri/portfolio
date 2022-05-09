document.querySelector("#togglebtn").onclick = function (event) {
  var menu = document.querySelector("#menu-overlay");
  var toggleButton = document.querySelector("#togglebtn");

  menu.classList.toggle("is-active");
  toggleButton.classList.toggle("is-active");

  var body = document.querySelector("body");
  body.classList.toggle("hide-body");
  event.preventDefault();
};
