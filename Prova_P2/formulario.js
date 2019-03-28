window.addEventListener("load",function(){
    var botao = document.getElementById('salvar');
    botao.addEventListener('click', Calcula, false);
});


function Calcula(){
	dataChegada = document.getElementById('dataC');
	dataSaida = document.getElementById('dataS');
	numeroHospedes = document.getElementById('quantidadeH').value;

	var dataC = new Date(dataChegada.value).getTime();
	var dataS = new Date(dataSaida.value).getTime();

	dataC = dataC /1000 / 60/ 60 / 24;
	dataS = dataS /1000 / 60/ 60 / 24;

	var dias = dataS - dataC;

	var quantH = parseInt(numeroHospedes);
	
	if(quantH > 1)
		var valorAdicional = (quantH-1) * 60;
	else
		var valorAdicional = 0;


	var resultado = 0;

	var resultado = 149 + (valorAdicional * dias);

	alert(" Valor Adicional: "+ valorAdicional +" Dias: "+ dias + " Resultado: " + resultado );

}