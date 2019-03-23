window.addEventListener("load", function(){
  document.getElementById('enlace_1').addEventListener('click', OcultarDesocultar, false);
  document.getElementById('enlace_2').addEventListener('click', OcultarDesocultar, false);
  document.getElementById('enlace_3').addEventListener('click', OcultarDesocultar, false);
  document.getElementById('botao').addEventListener('click', Adicionar, false);
  document.getElementById('lampada').addEventListener('click', LigarDesligar, false);
});

function OcultarDesocultar(e)
{
  var conteudo = 'conteudo_' + e.target.id[7];
  var c = document.getElementById(conteudo);

  console.log(e.textContent);
  if(c.style.display != "none")
  {
      c.style.display = "none";
      e.target.textContent = "Mostrar Conteúdo";

  }
  else
  {
    c.style.display = "block";
    e.target.textContent = "Ocultar Conteúdo";
  }

}

function Adicionar()
{
  var node = document.createElement("LI");
  var textnode = document.createTextNode(document.getElementById('texto').value);
  node.appendChild(textnode);
  document.getElementById("lista").appendChild(node);
}

function LigarDesligar(e)
{

  console.log(e.target.src);
  if(e.target.src.match("Hipermidias/lampada_on.gif"))
  {
    e.target.src = "Hipermidias/lampada_off.gif";
  }
  else
  {
    e.target.src = "Hipermidias/lampada_on.gif";
  }
}
