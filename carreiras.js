var root = document.querySelector(":root");
var cs = getComputedStyle(root);

var vagasSelecionadas = document.querySelector('#vagasSelecionadas');

var selectedJobs = [];

function selectJob(element) {
  var value = element.cells[0].innerText;
  if (!selectedJobs.includes(value)) 
  {
    selectedJobs.push(value);
    element.bgColor = cs.getPropertyValue("--mainColor");
    element.style.color = "white";

      var li = document.createElement("li");
      li.innerHTML = value;
      vagasSelecionadas.appendChild(li);


  } 
  else 
  {
    selectedJobs = selectedJobs.filter(v => {
      return v != value;
    })
    element.bgColor = "transparent";
    element.style.color = "black";

    for(var i = 0; i < vagasSelecionadas.childNodes.length; i++)
    {
      if(vagasSelecionadas.childNodes.item(i).innerHTML == value)
      {
            vagasSelecionadas.removeChild(vagasSelecionadas.childNodes.item(i))
      }
    } 


  }
  console.log(selectedJobs);
}


