var root = document.querySelector(':root')

var title = document.querySelector('.title');
root.style.setProperty('--headerSize', title.offsetHeight + 'px');
console.log(title.offsetHeight);


function gotoProdutos() {
  window.location.href = "pages/produtos.html";
}
