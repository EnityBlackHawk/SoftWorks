var root = document.querySelector(":root");

var menu = document.querySelector("nav");
var menuOpts = document.querySelector("nav ul");
var isOpen = false;

var title = document.querySelector(".title");
root.style.setProperty("--headerSize", title.offsetHeight + "px");
console.log(title.offsetHeight);


function gotoProdutos() {
  window.location.href = "pages/produtos.html";
}

function closeMenu()
{
  menuOpts.style = [];
  menu.style.background = "";
  menu.style.height = title.offsetHeight + "px";
}

function toggleMenu() {
  if (isOpen == true) {
    closeMenu();
    isOpen = false;
  } else {
    menuOpts.style.display = "block";
    menu.style.height = "auto";
    menu.style.background = "#fff";
    isOpen = true;
  }
}
