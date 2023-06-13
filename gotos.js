function gotoMarkwork() {
  window.location.href = "produtos/MarketWork.html";
}

function gotoOrcamento() {
  window.location.href = "../orcamento.html";
}

function gotoModelationWorks()
{
      window.location.href = "produtos/ModelationWork.html";
}

function gotoEngineWorks()
{
  window.location.href = "produtos/EngineWorks.html";
}


function gotoLove(e) {
  let t = document.querySelector("form input[type='text']").value;
  if (t == "Miriam" || t == "Miriam eu te amo") {
    e.preventDefault();
    window.location.href = "produtos/love.html";
  }
}
