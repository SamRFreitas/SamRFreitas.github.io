function fatorial(a)
{

  if ( a <= 1 )
    return (1);
  else
  {
    vfat = a * fatorial(a - 1);
    return (vfat);
  }
} ​


function ParImpar(a)
{
  if(a%2==0)
    console.log("PAR");
  else {
    console.log("IMPAR");
  }
}

function validarEmail(email){
  var check=/\w@\w.com/;

  return email.search(check);

}
