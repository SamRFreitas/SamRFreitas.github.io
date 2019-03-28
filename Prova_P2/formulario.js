window.addEventListener("load",function(){
    var botao = document.getElementById('salvar');
    botao.addEventListener('click', Calcula, false);
});


function Calcula(){
	dataChegada = document.getElementById('dataC');
	dataSaida = document.getElementById('dataS');
	quantidadeQuartos = document.getElementById('quantidadeQ').value;
	numeroHospedes = document.getElementById('quantidadeH').value;

	var dataC = new Date(dataChegada.value).getTime();
	var dataS = new Date(dataSaida.value).getTime();

	dataC = dataC /1000 / 60/ 60 / 24;
	dataS = dataS /1000 / 60/ 60 / 24;

	var dias = dataS - dataC;

	var quantQ = parseInt(quantidadeQuartos);
	var quantH = parseInt(numeroHospedes);
	
	if(quantH > 1)
		var valorAdicional = (quantH-1) * 60;
	else 
		var valorAdicional = 0; 

	if(quantQ > 1)
		var valorPorQuarto = quantQ * 149;
	else
		var valorPorQuarto = 149;

	if(quantQ > 1 && quantH > 1)
		var valorAdicional = valorAdicional * 2;


	var resultado = 0;

	var resultado = (valorPorQuarto + valorAdicional) * dias;

	alert("Valor por quarto: " +valorPorQuarto + " Valor Adicional: "+ valorAdicional +" Dias: "+ dias + " Resultado: " + resultado );

}