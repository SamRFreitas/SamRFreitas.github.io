calc-output

function Botoes(n)
{
  var saida = document.getElementById('calc-output');

  if(saida.textContent == "0")
  {
      saida.textContent = "";
      saida.textContent += n.value;
  }
  else
  {
    saida.textContent += n.value;
  }

}

function Clear()
{
    var saida = document.getElementById('calc-output');
    saida.textContent = "0";
}

function Result()
{
    var saida = document.getElementById('calc-output');
    saida.textContent = eval(saida.textContent);
}
