var root = document.querySelector(':root')

var menu = document.querySelector('nav');
var menuOpts = document.querySelector("nav ul");
var isOpen = true;

var title = document.querySelector('.title');
root.style.setProperty('--headerSize', title.offsetHeight + 'px');
console.log(title.offsetHeight);


function gotoProdutos() {
  window.location.href = "pages/produtos.html";
}

function toggleMenu()
{
  if(isOpen == true)
  {
    menuOpts.style.display = "none";
    menu.style.height = title.offsetHeight + 'px';
    isOpen = false;
  }

  else
  {
    menuOpts.style.display = "block";
    menu.style.height = "auto";
    isOpen = true;
  }
}
