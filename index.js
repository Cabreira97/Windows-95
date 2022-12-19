document.addEventListener("click", function (e) {
  if (e.target.className == "btn-active") {
    menu();
  }
});

// Menuzinho patrocinado pelo Bruno
function menu() {
  const menu = document.getElementById("menu");
  const btnFocus = document.getElementsByClassName("btn")[0];

  const currentDisplay = menu.style.display;

  if (currentDisplay == "flex") {
    menu.style.display = "none";
    btnFocus.setAttribute("class", "btn");
  } else {
    menu.style.display = "flex";

    btnFocus.setAttribute("class", "btn-focus btn");
  }
}
