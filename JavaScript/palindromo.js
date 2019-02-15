function Palindromo() {
    var palavra = prompt("Digite uma palavra:");

    var palindromo = [];

    for(var i=0, n=1; i < palavra.length; i++, n++){
        palindromo[palavra.length-n] = palavra[i];

    }
  // Pode usar um for para concatenar um vetor em uma String, ou usar o metodo Join que faz Isso!
  //  var palavraPalindromo="";
  //  for(var i=0; i < palavra.length; i++){
  //      palavraPalindromo+=palindromo[i];

  //}
  palavraPalindromo = palindromo.join("");
    console.log(palindromo);
    console.log(palavraPalindromo);

    if(palavraPalindromo == palavra){
      console.log(true)
    }else {
      console.log(false)
    }

}
